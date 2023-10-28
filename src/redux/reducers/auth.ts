
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStatusType, IUser, IAddress } from "../../pages/Login/types.d";

export interface AuthStore {
  isAuthenticated: boolean,
  token: string,
  user: IUser,
  message: string,
  isRegistered: boolean,
  isProfileFetched: boolean,
  isProfileUpdated: boolean,
}

const initialState: AuthStore = {
  isAuthenticated: false,
  user: {
    id: "",
    avatar: "",
    fullName: "",
    email: "",
    status: UserStatusType.InActive,
    userType: '',
    contact: '',
    address: []
  },
  token: '',
  message: '',
  isRegistered: false,
  isProfileFetched: false,
  isProfileUpdated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<Omit<AuthStore, 'user' | 'isRegistered' | 'isProfileFetched' | 'isProfileUpdated'>>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
      state.message = action.payload.message;
    },
    registerUser: (state, action: PayloadAction<Pick<AuthStore, 'isRegistered' | 'message'>>) => {
      state.isRegistered = action.payload.isRegistered;
      state.message = action.payload.message;
    },
    setUserProfile: (state, action: PayloadAction<Pick<AuthStore, 'user' | 'isProfileFetched' | 'message'>>) => {
      state.user = action.payload.user;
      state.isProfileFetched = action.payload.isProfileFetched;
      state.message = action.payload.message;
    },
    updateUserProfile: (state, action: PayloadAction<Pick<AuthStore, 'user' | 'isProfileUpdated' | 'message'>>) => {
      state.user = action.payload.user;
      state.isProfileUpdated = action.payload.isProfileUpdated;
      state.message = action.payload.message;
    },
    setUserAddress: (state, action: PayloadAction<IAddress[]>) => {
      state.user.address = action.payload;
    }
  }
})

export const { setAuthData, registerUser, setUserProfile, updateUserProfile, setUserAddress } = authSlice.actions;

export default authSlice.reducer;
