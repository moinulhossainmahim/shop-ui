import { call, put, select } from "redux-saga/effects";
import { ReduxStore } from "../store";
import { ICateogryResponse } from "../../components/ProductsWithSidebar/types";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { setCategories } from "../reducers/category";
import { LoaderKey, setLoader } from "../reducers/loader";

export function* fetchCategories(): any {
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.FetchCategories, value: true }));
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/categories`,
      {
        method: 'GET',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        })
      }
    )
    if(result.ok) {
      const response: ICateogryResponse = yield result.json();
      if(response.success) {
        yield put(setCategories(response));
      }
    }
    yield put(setLoader({ key: LoaderKey.FetchCategories, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.FetchCategories, value: false }));
  }
}
