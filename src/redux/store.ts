import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartStore } from "./reducers/cart";
import modalReducer, { ModalStore } from "./reducers/modal";
import sagas from './sagas';
import authReducer, { AuthStore } from './reducers/auth';
import loaderReducer, { LoaderStore } from './reducers/loader';
import categoriesReducer, { CategoryStore } from './reducers/category';

export interface ReduxStore {
  cart: CartStore;
  modal: ModalStore;
  auth: AuthStore;
  loader: LoaderStore;
  categories: CategoryStore,
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    auth: authReducer,
    loader: loaderReducer,
    categories: categoriesReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(sagas);

export default store;
