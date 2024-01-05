import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductsResponse } from "../../components/Products/types";

export interface RelatedProductsStore {
  relatedProductsResponse: IProductsResponse;
}

const initialState: RelatedProductsStore = {
  relatedProductsResponse: {
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

const relatedProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setRelatedProducts: (state, action: PayloadAction<IProductsResponse>) => {
      state.relatedProductsResponse = action.payload;
    }
  },
})

export const { setRelatedProducts } = relatedProductsSlice.actions;

export default relatedProductsSlice.reducer;
