import { call, put, select } from "redux-saga/effects";
import { ReduxStore } from "../store";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { IProductsResponse } from "../../components/Products/types";
import { setProducts } from "../reducers/products";
import { LoaderKey, setLoader } from "../reducers/loader";
import { SagaActions } from "./actions";

interface FetchProductsAction {
  type: SagaActions.FetchProducts;
  payload: {
    page?: number;
    category?: string;
    subCategory?: string;
    search?: string;
  }
}

export function* fetchProducts(action: FetchProductsAction): any {
  const { payload: { page, category, subCategory, search }} = action;
  const token = yield select((state: ReduxStore) => state.auth.token);
  yield put(setLoader({ key: LoaderKey.FetchProducts, value: true }));
  try {
    const result = yield call(
      fetch,
      `
        ${API_BASE_URL}/products/?
        ${page ? `page=${page}` : `page=1`}
        ${category ? `&category=${category}` : ''}
        ${subCategory ? `&subCategory=${subCategory}` : ''}
        ${search ? `&search=${search}` : ''}
      `,
      {
        method: 'GET',
        headers: new Headers({
          ...(USE_AUTH ? { 'Authorization': `Bearer ${token}` } : {}),
          'Accept': 'application/json',
        })
      }
    )
    if(result.ok) {
      const response: IProductsResponse = yield result.json();
      if(response.success) {
        yield put(setProducts(response));
      }
    }
    yield put(setLoader({ key: LoaderKey.FetchProducts, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.FetchProducts, value: false }));
  }
}
