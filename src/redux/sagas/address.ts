import { call, put, select } from "redux-saga/effects";
import { ReduxStore } from "../store";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { SagaActions } from "./actions";
import { IAddress } from "../../pages/Login/types";
import { toast } from "react-toastify";
import { setUserAddress } from "../reducers/auth";
import { ModalKey, setModal } from "../reducers/modal";

interface CreateAddressAction {
  type: SagaActions.CreateAddress;
  payload: IAddress;
}

interface CreateAddressResponse {
  content: IAddress;
  message: string;
  success: boolean;
}

interface IFetchAddressesResponse {
  content: IAddress[];
  message: string;
  success: boolean;
}

interface DeleteAddressAction {
  type: SagaActions.DeleteAddress;
  payload: {
    id: string;
  }
}

export function* fetchAddresses(): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/address`,
      {
        method: 'GET',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        }),
      }
    )
    if(result.ok) {
      const response: IFetchAddressesResponse = yield result.json();
      if(response.success) {
        yield put(setUserAddress(response.content));
      } else {
        console.log(response);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* createAddress(action: CreateAddressAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/address`,
      {
        method: 'POST',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
        body: JSON.stringify(action.payload),
      }
    )
    if(result.ok) {
      const response: CreateAddressResponse = yield result.json();
      if(response.success) {
        toast.success(response.message, { autoClose: 1500 });
        yield call(fetchAddresses);
        yield put(setModal({ key: ModalKey.CreateAddressPopup, value: false }));
      } else {
        console.log(response);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* deleteAddress(action: DeleteAddressAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/address/${action.payload.id}`,
      {
        method: 'DELETE',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        }),
      }
    )
    if(result.ok) {
      const response = yield result.json();
      if(response.success) {
        toast.success(response.message, { autoClose: 1500 });
        yield put(setModal({ key: ModalKey.ConfirmationPopup, value: false }));
        yield call(fetchAddresses);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
