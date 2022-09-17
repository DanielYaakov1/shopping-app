import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IOrder {
  isPurchaseModal: boolean;
}

const initialState: IOrder = {
  isPurchaseModal: false,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setPurchaseModal(state, action: PayloadAction<boolean>) {
      state.isPurchaseModal = action.payload;
    },
  },
});
export const { setPurchaseModal } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
