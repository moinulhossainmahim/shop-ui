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
import { LoaderKey, setLoader } from "../reducers/loader";

interface FetchOrderAction {
  type: SagaActions.FetchOrder;
  payload: {
    id: string;
  }
}

interface FetchOrdersAction {
  type: SagaActions.FetchOrders;
  payload: {
    page?: number,
  }
}

interface CreateOrderAction {
  type: SagaActions.CreateOrder;
  payload: {
    orderData: IOrderData;
    navigation: NavigateFunction;
  }
}

export function* fetchOrders(action?: FetchOrdersAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  const orders: INewOrder[] = yield select((state: ReduxStore) => state.orders.orderResponse.content)
  const page = action?.payload?.page ?? 1;
  yield put(setLoader({ key: LoaderKey.FetchOrders, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/orders?page=${page}`,
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
      if (response.meta.page > 1) {
        orders.map((item) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          response.content.push(item);
        })
        yield put(setOrders({
          content: response.content as INewOrder[],
          message: response.message,
          success: response.success,
          meta: response.meta,
        }));
      } else {
        yield put(setOrders({
          content: response.content as INewOrder[],
          message: response.message,
          success: response.success,
          meta: response.meta,
        }));
      }
    }
    yield put(setLoader({ key: LoaderKey.FetchOrders, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.FetchOrders, value: false }));
  }
}

export function* fetchOrder(action: FetchOrderAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.FetchOrder, value: true }));
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
    yield put(setLoader({ key: LoaderKey.FetchOrder, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.FetchOrder, value: false }));
  }
}

export function* createOrder(action: CreateOrderAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.CreateOrder, value: true }));
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
      const order = response.content as INewOrder;
      yield put(resetCart())
      toast.success(response.message, { autoClose: 1500 });
      yield call(fetchOrders);
      setTimeout(() => {
        action.payload.navigation(`/orders/${order.id}`);
      }, 2000)
    }
    yield put(setLoader({ key: LoaderKey.CreateOrder, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.CreateOrder, value: false }));
  }
}
