import { call, put, select } from "redux-saga/effects";
import { ReduxStore } from "../store";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { IOrderResponse } from "../../pages/Orders/types";
import { setOrders } from "../reducers/orders";

// interface FetchOrderAction {
//   type: SagaActions.FetchOrder;
//   payload: {
//     id: string;
//   }
// }

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
        content: response.content,
        message: response.message,
        success: response.success,
        meta: response.meta,
      }));
    }
  } catch (error) {
    console.log(error);
  }
}

// export function* fetchOrder(action: FetchOrderAction): any {
//   const token = yield select((state: ReduxStore) => state.auth.token);
//   try {
//     const result = yield call(
//       fetch,
//       `${API_BASE_URL}/orders/${action.payload.id}`,
//       {
//         method: 'GET',
//         headers: new Headers({
//           ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
//           'Accept': 'application/json',
//         }),
//       },
//     )
//     const response: IOrderResponse = yield result.json();
//     if(response.success) {
//       yield put(setOrder({
//         singleOrder: response.content as INewOrder,
//         singleOrderMessage: response.message,
//         singleOrderSuccess: response.singleOrderSuccess,
//       }))
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
