import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum LoaderKey {
  Login = 'Login',
  Register = 'Register',
  FetchProfile = 'FetchProfile',
  UpdateProfile = 'UpdateProfile',
  FetchAddresses = 'FetchAddresses',
  CreateAddress = 'CreateAddress',
  EditAddress = 'EditAddress',
  DeleteAddress = 'DeleteAddress',
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
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ILoaderAction>) => {
      const { key, value } = action.payload;
      state[key] = value;
    }
  }
})

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
