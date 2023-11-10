import { call, put, select } from "redux-saga/effects";
import { ReduxStore } from "../store";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { IWishlistResponse } from "../../pages/Wishlists/types";
import { setWishlist } from "../reducers/wishlist";
import { SagaActions } from "./actions";
import { toast } from "react-toastify";
import { LoaderKey, setLoader } from "../reducers/loader";

interface AddToWishlistAction {
  type: SagaActions.AddToWishlist;
  payload: {
    id: string;
  };
}

interface RemoveFromWishlistAction {
  type: SagaActions.RemoveFromWishlist;
  payload: {
    id: string;
  };
}

export function* fetchWishlist(): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.FetchWishlist, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/wishlists`,
      {
        method: 'GET',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        })
      }
    )
    if(result.ok) {
      const response: IWishlistResponse = yield result.json();
      if(response.success) {
        yield put(setWishlist(response));
      }
    }
    yield put(setLoader({ key: LoaderKey.FetchWishlist, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.FetchWishlist, value: false }));
  }
}

export function* addToWishlist(action: AddToWishlistAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/wishlists/${action.payload.id}`,
      {
        method: 'POST',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        })
      }
    )
    if(result.ok) {
      const response: IWishlistResponse = yield result.json();
      if(response.success) {
        toast.success(response.message, { autoClose: 1500 });
        yield call(fetchWishlist);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* removeFromWishlist(action: RemoveFromWishlistAction): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/wishlists/${action.payload.id}`,
      {
        method: 'DELETE',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        })
      }
    )
    if(result.ok) {
      const response: IWishlistResponse = yield result.json();
      if(response.success) {
        toast.success(response.message, { autoClose: 1500 });
        yield call(fetchWishlist);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
