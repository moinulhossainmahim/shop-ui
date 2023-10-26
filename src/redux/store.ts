import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartStore } from "./reducers/cart";
import modalReducer, { ModalStore } from "./reducers/modal";
import sagas from './sagas';
import authReducer, { AuthStore } from './reducers/auth';
import loaderReducer, { LoaderStore } from './reducers/loader';
import categoriesReducer, { CategoryStore } from './reducers/category';
import productsReducer, { ProductsStore } from './reducers/products';
import wishlistReducer, { WishlistStore } from './reducers/wishlist';

export interface ReduxStore {
  cart: CartStore;
  modal: ModalStore;
  auth: AuthStore;
  loader: LoaderStore;
  categories: CategoryStore;
  products: ProductsStore;
  wishlist: WishlistStore;
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    auth: authReducer,
    loader: loaderReducer,
    categories: categoriesReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(sagas);

export default store;
