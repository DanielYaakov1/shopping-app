import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  token: string;
  id: string;
  message: string;
  code: string;
  isAdmin: boolean;
}

export interface IAppState {
  isConnected?: boolean;
  user?: User;
  isLoading: boolean;
  isErrorMessage: string;
  isLoginMode: boolean;
  isDisableSubmitButton: boolean;
  isDarkModeTheme?: boolean;
  isAppAuthenticated: boolean;
}
const initialState: IAppState = {
  isErrorMessage: '',
  isLoading: true,
  isDisableSubmitButton: true,
  isLoginMode: true,
  isDarkModeTheme: false,
  isAppAuthenticated: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAppAuthenticated = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.isErrorMessage = action.payload;
    },
    setLoginMode: (state) => {
      state.isLoginMode = !state.isLoginMode;
    },
    setDisableSubmitButton: (state, action: PayloadAction<boolean>) => {
      state.isDisableSubmitButton = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});
export const {
  setLoading,
  setErrorMessage,
  setLoginMode,
  setAppAuthenticated,
  setDisableSubmitButton,
  setUser,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
