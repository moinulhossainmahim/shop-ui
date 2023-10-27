import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IOrderResponse } from "../../pages/Orders/types";

export interface OrdersStore {
  orderResponse: IOrderResponse;
}

const initialState: OrdersStore = {
  orderResponse: {
    content: [],
    success: false,
    message: "",
  },
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Partial<IOrderResponse>>) => {
      state.orderResponse.content = action.payload.content || [];
      state.orderResponse.message = action.payload.message || '';
      state.orderResponse.meta = action.payload.meta;
      state.orderResponse.success = action.payload.success || false;

    }
  }
})

export const { setOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
