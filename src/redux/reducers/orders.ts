import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddressType, IOrderResponse, PaymentMethod, PaymentStatus } from "../../pages/Orders/types.d";
import { StatusType } from "../../components/OrderStatusChip/OrderStatusChip";

export interface OrdersStore {
  orderResponse: IOrderResponse;
}

const initialState: OrdersStore = {
  orderResponse: {
    content: [],
    success: false,
    message: "",
    order: {
      id: "",
      tracking_no: "",
      order_date: "",
      order_status: StatusType.Processing,
      delivery_fee: 0,
      total: 0,
      amount: 0,
      payment_status: PaymentStatus.Pending,
      payment_method: PaymentMethod.Cashon,
      orderItems: [],
      shippingAddress: {
        id: "",
        title: "",
        country: "",
        city: "",
        state: "",
        zip: "",
        streetAddress: "",
        addressType: AddressType.Shipping
      },
      billingAddress: {
        id: "",
        title: "",
        country: "",
        city: "",
        state: "",
        zip: "",
        streetAddress: "",
        addressType: AddressType.Billing
      },
    },
    orderMessage: '',
    orderSuccess: false,
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
    },
    setOrder: (state, action: PayloadAction<Pick<IOrderResponse, 'orderMessage' | 'order' | 'orderSuccess'>>) => {
      state.orderResponse.order = action.payload.order;
      state.orderResponse.orderMessage = action.payload.orderMessage;
      state.orderResponse.orderSuccess = action.payload.orderSuccess;
    }
  }
})

export const { setOrders, setOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
