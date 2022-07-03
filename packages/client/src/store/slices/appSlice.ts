import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
     isConnected?: boolean;
     user?: any;
     isLoading?: boolean;
     isErrorMessage: string;
     isLogin?: boolean;
     isDisableSubmitButton: boolean;
     isDarkModeTheme?: boolean;
}
const initialState: IAppState = {
     isErrorMessage: '',
     isDisableSubmitButton: true,
};

export const appSlice = createSlice({
     name: 'app',
     initialState,
     reducers: {
          setErrorMessage: (state, action: PayloadAction) => {},
     },
});
export const { setErrorMessage } = appSlice.actions;
export const appReducer = appSlice.reducer;
