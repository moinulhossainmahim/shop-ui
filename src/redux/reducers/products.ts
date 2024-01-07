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
    meta: {
      take: 0,
      hasNextPage: false,
      hasPreviousPage: false,
      page: 0,
      itemCount: 0,
      pageCount: 0,
    },
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
