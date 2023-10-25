import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum ModalKey {
  ProductDetails = 'ProductDetails',
  ProfileEditPopup = 'ProfileEditPopup',
  CreateAddressPopup = 'CreateAddressPopup',
  ConfirmationPopup = 'ConfirmationPopup',
  UpdateAddressPopup = 'UpdateAddressPopup',
}

interface IModalAction {
  key: ModalKey,
  value: boolean,
}

export type ModalStore = Record<ModalKey, boolean>;

const initialState: ModalStore = {
  [ModalKey.ProductDetails]: false,
  [ModalKey.ProfileEditPopup]: false,
  [ModalKey.CreateAddressPopup]: false,
  [ModalKey.ConfirmationPopup]: false,
  [ModalKey.UpdateAddressPopup]: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<IModalAction>) => {
      const { key, value } = action.payload;
      state[key] = value;
    }
  }
})

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
