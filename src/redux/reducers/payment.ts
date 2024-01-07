import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PaymentStore {
  checkoutSessionUrl: string;
  payment_status: string;
}

const initialState: PaymentStore = {
  checkoutSessionUrl: '',
  payment_status: '',
}

const payment = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setCheckoutSessionUrl: (state, action: PayloadAction<PaymentStore>) => {
      state.checkoutSessionUrl = action.payload.checkoutSessionUrl;
      state.payment_status = action.payload.payment_status;
    },
    resetCheckoutSessionUrl: (state) => {
      state.checkoutSessionUrl = '';
      state.payment_status = '';
    }
  },
})

export const { setCheckoutSessionUrl, resetCheckoutSessionUrl } = payment.actions;

export default payment.reducer;
