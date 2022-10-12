import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  uid: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  token: string;
  id: string;
  message?: string;
  code?: string;
  isAdmin: boolean;
}
export interface Iuse {
  user?: IUser;
}
const initialState: Iuse = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser1(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export const { setUser1 } = userSlice.actions;
export const userReducer = userSlice.reducer;
