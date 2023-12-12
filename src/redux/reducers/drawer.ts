import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum DrawerKey {
  FilterCategory = 'FilterCategory',
  PageOptions = 'PageOptions',
  Cart = 'Cart',
}

interface IDrawerAction {
  key: DrawerKey,
  value: boolean,
}

export type DrawerStore = Record<DrawerKey, boolean>;

const initialState: DrawerStore = {
  [DrawerKey.FilterCategory]: false,
  [DrawerKey.PageOptions]: false,
  [DrawerKey.Cart]: false,
}

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setDrawer: (state, action: PayloadAction<IDrawerAction>) => {
      const { key, value } = action.payload;
      state[key] = value;
    }
  }
})

export const { setDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
