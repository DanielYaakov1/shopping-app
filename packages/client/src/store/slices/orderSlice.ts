import { IShippingOrder } from './../../interfaces/Orders.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IOrder {
  isCheckoutOpen: boolean;
  isLoading: boolean;
  orders: IShippingOrder[];
  didOrderSubmit: boolean;
  didOrderSuccessfully: boolean;
}

const initialState: IOrder = {
  isCheckoutOpen: false,
  isLoading: false,
  orders: [],
  didOrderSubmit: false,
  didOrderSuccessfully: false,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setCheckoutOpen(state, action: PayloadAction<boolean>) {
      state.isCheckoutOpen = action.payload;
    },
    setOrders(state, action: PayloadAction<IShippingOrder[]>) {
      state.orders = action.payload;
    },
    setLoadingOrder(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setDidOrderSubmit(state, action: PayloadAction<boolean>) {
      state.didOrderSubmit = action.payload;
    },
    setDidOrderSuccessfully(state, action: PayloadAction<boolean>) {
      state.didOrderSuccessfully = action.payload;
    },
  },
});
export const {
  setCheckoutOpen,
  setOrders,
  setLoadingOrder,
  setDidOrderSubmit,
  setDidOrderSuccessfully,
} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
