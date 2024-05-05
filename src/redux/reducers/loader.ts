import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum LoaderKey {
  Login = 'Login',
  GoogleLogin = 'GoogleLogin',
  Register = 'Register',
  FetchProfile = 'FetchProfile',
  UpdateProfile = 'UpdateProfile',
  FetchAddresses = 'FetchAddresses',
  CreateAddress = 'CreateAddress',
  EditAddress = 'EditAddress',
  DeleteAddress = 'DeleteAddress',

  FetchCategories = 'FetchCategories',
  FetchProducts = 'FetchProducts',
  ChangePassword = 'ChangePassword',
  FetchWishlist = 'FetchWishlist',
  FetchOrders = 'FetchOrders',
  FetchOrder = 'FetchOrder',
  CreateOrder = 'CreateOrder',
  CheckOrderAvailability = 'CheckOrderAvailability',
  FetchCheckoutSession = 'FetchCheckoutSession',
  FetchRelatedProducts = 'FetchRelatedProducts',
}

interface ILoaderAction {
  key: LoaderKey,
  value: boolean,
}

export type LoaderStore = Record<LoaderKey, boolean>;

const initialState: LoaderStore = {
  [LoaderKey.Login]: false,
  [LoaderKey.Register]: false,
  [LoaderKey.FetchProfile]: false,
  [LoaderKey.UpdateProfile]: false,
  [LoaderKey.CreateAddress]: false,
  [LoaderKey.EditAddress]: false,
  [LoaderKey.FetchAddresses]: false,
  [LoaderKey.DeleteAddress]: false,
  [LoaderKey.FetchCategories]: false,
  [LoaderKey.FetchProducts]: false,
  [LoaderKey.ChangePassword]: false,
  [LoaderKey.FetchWishlist]: false,
  [LoaderKey.FetchOrders]: false,
  [LoaderKey.FetchOrder]: false,
  [LoaderKey.CreateOrder]: false,
  [LoaderKey.CheckOrderAvailability]: false,
  [LoaderKey.FetchCheckoutSession]: false,
  [LoaderKey.FetchRelatedProducts]: false,
  [LoaderKey.GoogleLogin]: false,
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<ILoaderAction>) => {
      const { key, value } = action.payload;
      state[key] = value;
    }
  }
})

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;