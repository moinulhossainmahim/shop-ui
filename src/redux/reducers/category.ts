import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICateogryResponse } from "../../components/ProductsWithSidebar/types.d";

export interface CategoryStore {
  categoryResponse: ICateogryResponse;
}

const initialState: CategoryStore = {
  categoryResponse: {
    content: [],
    message: '',
    success: false,
    meta: {}
  }
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICateogryResponse>) => {
      state.categoryResponse = action.payload;
    }
  }
})

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
