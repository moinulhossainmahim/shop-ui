import { call, put, select } from "redux-saga/effects";
import { ReduxStore } from "../store";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { INewOrder, IOrderResponse } from "../../pages/Orders/types.d";
import { setOrder, setOrders } from "../reducers/orders";
import { SagaActions } from "./actions";
import { IOrderData } from "../../pages/Checkout/types.d";
import { resetCart } from "../reducers/cart";
import { toast } from "react-toastify";
import { NavigateFunction } from "react-router-dom";

interface FetchOrderAction {
  type: SagaActions.FetchOrder;
  payload: {
    id: string;
    navigation: NavigateFunction;
  }
}

interface CreateOrderAction {
  type: SagaActions.CreateOrder;
  payload: {
    orderData: IOrderData;
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
      action.payload.navigation(`/orders/${action.payload.id}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* createOrder(action: CreateOrderAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
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
    const response: IOrderResponse = yield result.json();
    if(response.success) {
      yield put(setOrder({
        order: response.content as INewOrder,
        orderMessage: response.message,
        orderSuccess: response.success,
      }))
      yield put(resetCart())
      toast.success(response.message, { autoClose: 1500 });
      yield call(fetchOrders);
    }
  } catch (error) {
    console.log(error);
  }
}
