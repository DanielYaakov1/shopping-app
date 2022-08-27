import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IRegistrationState {
  firstName: string;
  lastName: string;
  email: string;
  password?: number;
  isErrorMessage: string;
}

const initialState: IRegistrationState = {
  firstName: '',
  lastName: '',
  email: '',
  isErrorMessage: '',
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setAllRegistrationFields: (state, action: PayloadAction) => {},
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<number>) => {
      state.password = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.isErrorMessage = action.payload;
    },
  },
});
export const { setAllRegistrationFields, setErrorMessage } = registrationSlice.actions;
export const registrationReducer = registrationSlice.reducer;
