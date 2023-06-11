import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartStore } from "./reducers/cart";
import modalReducer, { ModalStore } from "./reducers/modal";

export interface ReduxStore {
  cart: CartStore;
  modal: ModalStore;
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  }
})

export default store;
