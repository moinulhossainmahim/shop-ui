import { call, put, select } from "redux-saga/effects";
import { ReduxStore } from "../store";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { INewOrder, IOrderResponse } from "../../pages/Orders/types.d";
import { setOrder, setOrders } from "../reducers/orders";
import { SagaActions } from "./actions";

interface FetchOrderAction {
  type: SagaActions.FetchOrder;
  payload: {
    id: string;
  }
}

export function* fetchOrders(): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/orders`,
      {
        method: 'GET',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        }),
      },
    )
    const response: IOrderResponse = yield result.json();
    if(response.success) {
      yield put(setOrders({
        content: response.content as INewOrder[],
        message: response.message,
        success: response.success,
        meta: response.meta,
      }));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* fetchOrder(action: FetchOrderAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/orders/${action.payload.id}`,
      {
        method: 'GET',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        }),
      },
    )
    const response: IOrderResponse = yield result.json();
    if(response.success) {
      yield put(setOrder({
        order: response.content as INewOrder,
        orderMessage: response.message,
        orderSuccess: response.success,
      }))
    }
  } catch (error) {
    console.log(error);
  }
}
