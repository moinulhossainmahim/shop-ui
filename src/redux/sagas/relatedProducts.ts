import { call, put, select } from "redux-saga/effects";
import { ReduxStore } from "../store";
import { API_BASE_URL, USE_AUTH } from "../../constants";
import { IProductTemp, IProductsResponse } from "../../components/Products/types";
import { LoaderKey, setLoader } from "../reducers/loader";
import { SagaActions } from "./actions";
import { setRelatedProducts } from "../reducers/relatedProducts";

interface FetchRelatedProductsAction {
  type: SagaActions.FetchRelatedProducts;
  payload: {
    page?: number;
    category?: string;
  }
}

export function* fetchRelatedProducts(action: FetchRelatedProductsAction): any {
  yield put(setLoader({ key: LoaderKey.FetchRelatedProducts, value: true }));
  const products: IProductTemp[] = yield select((state: ReduxStore) => state.relatedProducts.relatedProductsResponse.content);
  const { payload: { page, category }} = action;
  const token = yield select((state: ReduxStore) => state.auth.token);
  try {
    const result = yield call(
      fetch,
      `${API_BASE_URL}/products/?${page ? `page=${page}` : 'page=1'}${category ? `&category=${category}` : ''}`,
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
        if (response.meta.page > 1) {
          products.map((product) => {
            response.content.push(product);
          })
          yield put(setRelatedProducts(response));
        } else {
          yield put(setRelatedProducts(response));
        }
      }
    }
    yield put(setLoader({ key: LoaderKey.FetchRelatedProducts, value: false }));
  } catch (error) {
    console.log(error);
    yield put(setLoader({ key: LoaderKey.FetchRelatedProducts, value: false }));
  }
}
