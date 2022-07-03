import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IRegistrationState {
     firstName: string;
     lastName: string;
     email: string;
     password?: number;
}

const initialState: IRegistrationState = {
     firstName: '',
     lastName: '',
     email: '',
};

export const registrationSlice = createSlice({
     name: 'registration',
     initialState,
     reducers: {
          setAllRegistrationFields: (state, action: PayloadAction) => {},
     },
});
export const { setAllRegistrationFields } = registrationSlice.actions;
export const registrationReducer = registrationSlice.reducer;
