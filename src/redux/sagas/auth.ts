import { call, put, select } from "redux-saga/effects";
import { SagaActions } from "./actions";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { IRegisterForm } from "../../pages/Register/types";
import { registerUser, setAuthData, setUserProfile, updateUserProfile } from "../reducers/auth";
import { ReduxStore } from "../store";
import { IUser } from "../../pages/Login/types";
import { toast } from "react-toastify";
import { ModalKey, setModal } from "../reducers/modal";
import { LoaderKey, setLoader } from "../reducers/loader";
import { fetchOrders } from "./orders";

interface RegisterResponse {
  success: boolean;
  message: string;
  content: [];
}

interface RegisterAction {
  type: SagaActions.Register;
  payload: IRegisterForm;
}

interface LoginResponse {
  success: boolean;
  message: '';
  content: {
    accessToken: string,
  }
}

interface ProfileResponse {
  message: string;
  success: boolean;
  content: IUser;
}

interface LoginAction {
  type: SagaActions.Login;
  payload: Omit<IRegisterForm, 'fullName'>;
}

export interface UpdateProfileAction {
  type: SagaActions.UpdateProfile,
  payload: {
    id: string;
    formData: FormData,
  }
}

export interface ChangePasswordAction {
  type: SagaActions.ChangePassword,
  payload: {
    id: string;
    data: {
      oldPassword: string;
      newPassword: string;
    }
  }
}

interface UpdateProfileResponse {
  message: string;
  content: IUser;
  success: boolean;
}

interface ChangePasswordResponse {
  message: string;
  content: [];
  success: boolean;
}

export function* fetchProfile(): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.FetchProfile, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/users/profile`,
      {
        method: 'GET',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        }),
      },
    )
    const response: ProfileResponse = yield result.json();
    if(response.success) {
      yield put(setUserProfile({
        message: response.message,
        isProfileFetched: response.success,
        user: response.content,
      }))
    }
    yield put(setLoader({ key: LoaderKey.FetchProfile, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.FetchProfile, value: false }));
  }
}

export function* register(action: RegisterAction): any {
  yield put(setLoader({ key: LoaderKey.Register, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/auth/signup`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
        body: JSON.stringify(action.payload),
      }
    )
    if(result.ok) {
      const response: RegisterResponse = yield result.json();
      if(response.success) {
        yield put(registerUser({
          isRegistered: response.success,
          message: response.message,
        }))
      }
    }
    yield put(setLoader({ key: LoaderKey.Register, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.Register, value: false }));
  }
}

export function* login(action: LoginAction): any {
  yield put(setLoader({ key: LoaderKey.Login, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/auth/signin`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
        body: JSON.stringify(action.payload),
      }
    )
    if(result.ok) {
      const response: LoginResponse = yield result.json();
      if(response.success) {
        toast.success(response.message, { autoClose: 1500 });
        yield put(setAuthData({
          token: response.content.accessToken,
          message: response.message,
          isAuthenticated: response.success,
        }))
        yield call(fetchOrders);
      } else {
        toast.error(response.message, { autoClose: 1500 });
      }
    }
    yield put(setLoader({ key: LoaderKey.Login, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.Login, value: false }));
  }
}

export function* updateProfile(action: UpdateProfileAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.UpdateProfile, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/users/${action.payload.id}`,
      {
        method: 'PATCH',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        }),
        body: action.payload.formData,
      },
    )
    const response: UpdateProfileResponse = yield result.json();
    if(response.success) {
      yield put(updateUserProfile({
        isProfileUpdated: response.success,
        user: response.content,
        message: response.message,
      }))
      toast.success(response.message, { autoClose: 1500 });
      yield put(setModal({ key: ModalKey.ProfileEditPopup, value: false }));
    }
    yield put(setLoader({ key: LoaderKey.UpdateProfile, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.UpdateProfile, value: false }));
  }
}

export function* changePassword(action: ChangePasswordAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.ChangePassword, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/users/${action.payload.id}/update-password`,
      {
        method: 'PATCH',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(action.payload.data),
      },
    )
    const response: ChangePasswordResponse = yield result.json();
    if(response.success) {
      toast.success(response.message, { autoClose: 1500 });
    }
    yield put(setLoader({ key: LoaderKey.ChangePassword, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.ChangePassword, value: false }));
  }
}
