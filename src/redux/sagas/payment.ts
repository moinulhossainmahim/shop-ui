import { call, put, select } from "redux-saga/effects";
import { IOrderData } from "../../pages/Checkout/types";
import { LoaderKey, setLoader } from "../reducers/loader";
import { ReduxStore } from "../store";
import { SagaActions } from "./actions";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { setClientSecret } from "../reducers/payment";

interface FetchClientSecretAction {
  type: SagaActions.FetchClientSecret;
  payload: {
    orderData: IOrderData;
  }
}

export function* fetchClientSecret(action: FetchClientSecretAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.FetchClientSecret, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/orders`,
      {
        method: 'POST',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(action.payload.orderData),
      },
    )
    const response = yield result.json();
    if (response.success) {
      yield put(setClientSecret({ clientSecret: response.clientSecret }));
    } else {
      console.log('something went wrong', response);
    }
    yield put(setLoader({ key: LoaderKey.FetchClientSecret, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.FetchClientSecret, value: false }));
  }
}
