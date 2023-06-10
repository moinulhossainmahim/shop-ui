import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartStore } from "./reducers/cart";

export interface ReduxStore {
  cart: CartStore;
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})

export default store;
