import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  token: string;
  uid: string;
  isAdmin: boolean;
  user: any;
}

const initialState: IUser = {
  token: '',
  uid: '',
  isAdmin: false,
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      state.isAdmin = action.payload.isAdmin;
      state.user = action.payload;
      // [...state.user = action.payload];
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
