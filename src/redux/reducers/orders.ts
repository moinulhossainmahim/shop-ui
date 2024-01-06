import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IOrderResponse } from "../../pages/Orders/types.d";

export interface OrdersStore {
  orderResponse: IOrderResponse;
}

const initialState: OrdersStore = {
  orderResponse: {
    content: [],
    success: false,
    order: null,
    message: "",
    orderMessage: '',
    orderSuccess: false,
    isAvailable: false,
  },
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Pick<IOrderResponse, 'message' | 'content' | 'meta' | 'success'>>) => {
      state.orderResponse.content = action.payload.content;
      state.orderResponse.message = action.payload.message;
      state.orderResponse.meta = action.payload.meta;
      state.orderResponse.success = action.payload.success;
      state.orderResponse.isAvailable = false;
    },
    setOrder: (state, action: PayloadAction<Pick<IOrderResponse, 'orderMessage' | 'order' | 'orderSuccess'>>) => {
      state.orderResponse.order = action.payload.order;
      state.orderResponse.orderMessage = action.payload.orderMessage;
      state.orderResponse.orderSuccess = action.payload.orderSuccess;
      state.orderResponse.isAvailable = false;
    },
    checkAvailability: (state, action: PayloadAction<{ isAvailable: boolean }>) => {
      state.orderResponse.isAvailable = action.payload.isAvailable;
    },
  }
})

export const { setOrders, setOrder, checkAvailability } = ordersSlice.actions;

export default ordersSlice.reducer;
