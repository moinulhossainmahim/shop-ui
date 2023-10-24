import { call, put, select } from "redux-saga/effects";
import { SagaActions } from "./actions";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { IRegisterForm } from "../../pages/Register/types";
import { registerUser, setAuthData, setUserProfile } from "../reducers/auth";
import { ReduxStore } from "../store";
import { IUser } from "../../pages/Login/types";

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
  content: IUser[];
}

interface LoginAction {
  type: SagaActions.Login;
  payload: Omit<IRegisterForm, 'fullName'>;
}

export function* register(action: RegisterAction): any {
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
      if(response.success)
      yield put(registerUser({
        isRegistered: response.success,
        message: response.message,
      }))
    }
  } catch (error) {
    console.log(error);
  }
}

export function* login(action: LoginAction): any {
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
        yield put(setAuthData({
          token: response.content.accessToken,
          message: response.message,
          isAuthenticated: response.success,
        }))
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* fetchProfile(): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
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
        user: response.content[0],
      }))
    }
  } catch (error) {
    console.log(error);
  }
}
