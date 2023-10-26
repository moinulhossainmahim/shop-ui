import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductsResponse } from "../../components/Products/types";


export interface ProductsStore {
  productsResponse: IProductsResponse;
}

const initialState: ProductsStore = {
  productsResponse: {
    content: [],
    message: '',
    success: false,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProductsResponse>) => {
      state.productsResponse = action.payload;
    }
  },
})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
