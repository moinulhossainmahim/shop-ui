import { call, put, select } from "redux-saga/effects";
import { LoaderKey, setLoader } from "../reducers/loader";
import { ReduxStore } from "../store";
import { SagaActions } from "./actions";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { setCheckoutSessionUrl } from "../reducers/payment";
import { CheckOrderAvailabilityData } from "./orders";

interface FetchCheckoutSessionAction {
  type: SagaActions.FetchCheckoutSession;
  payload: {
    items: CheckOrderAvailabilityData[],
  };
}

export function* fetchCheckoutSession(action: FetchCheckoutSessionAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.FetchCheckoutSession, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/payment/checkout-session`,
      {
        method: 'POST',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(action.payload),
      },
    )
    const response = yield result.json();
    yield put(setCheckoutSessionUrl({ checkoutSessionUrl: response.url, payment_status: response.payment_status }));
    yield put(setLoader({ key: LoaderKey.FetchCheckoutSession, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.FetchCheckoutSession, value: false }));
  }
}
