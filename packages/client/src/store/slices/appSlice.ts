import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
  isConnected?: boolean;
  isLoadingApp: boolean;
  isErrorMessage: string;
  isLoginMode: boolean;
  isDisableSubmitButton: boolean;
  isDarkModeTheme?: boolean;
  isAppAuthenticated: boolean;
}
const initialState: IAppState = {
  isErrorMessage: '',
  isLoadingApp: true,
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

    setLoadingApp(state, action: PayloadAction<boolean>) {
      state.isLoadingApp = action.payload;
    },
  },
});
export const {
  setLoadingApp,
  setErrorMessage,
  setLoginMode,
  setAppAuthenticated,
  setDisableSubmitButton,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
