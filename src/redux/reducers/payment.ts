import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PaymentStore {
  clientSecret: string;
}

const initialState: PaymentStore = {
  clientSecret: '',
}

const payment = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setClientSecret: (state, action: PayloadAction<PaymentStore>) => {
      state.clientSecret = action.payload.clientSecret;
    },
    resetClientSecret: (state) => {
      state.clientSecret = '';
    }
  },
})

export const { setClientSecret, resetClientSecret } = payment.actions;

export default payment.reducer;
