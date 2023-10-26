import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWishlistResponse } from "../../pages/Wishlists/types";

export interface WishlistStore {
  wishlistResponse: IWishlistResponse;
}

const initialState: WishlistStore = {
  wishlistResponse: {
    content: [],
    message: '',
    success: false,
    meta: {
      page: 0,
      take: 0,
      itemCount: 0,
      pageCount: 0,
      hasPreviousPage: false,
      hasNextPage: false
    }
  }
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist: (state, action: PayloadAction<IWishlistResponse>) => {
      state.wishlistResponse = action.payload;
    }
  }
})

export const { setWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
