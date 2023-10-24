
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStatusType, IUser } from "../../pages/Login/types.d";

export interface AuthStore {
  isAuthenticated: boolean,
  token: string,
  user: IUser,
  message: string,
  isRegistered: boolean,
  isProfileFetched: boolean,
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
    address: []
  },
  token: '',
  message: '',
  isRegistered: false,
  isProfileFetched: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<Omit<AuthStore, 'user' | 'isRegistered' | 'isProfileFetched'>>) => {
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
  }
})

export const { setAuthData, registerUser, setUserProfile } = authSlice.actions;

export default authSlice.reducer;
