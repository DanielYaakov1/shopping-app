import { IShippingOrder } from './../../interfaces/Orders.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IOrder {
  isCheckoutOpen: boolean;
  isLoadingOrders: boolean;
  orders: IShippingOrder[];
  didOrderSubmit: boolean;
  didOrderSuccessfully: boolean;
  isErrorOrder: string;
}

const initialState: IOrder = {
  isCheckoutOpen: false,
  isLoadingOrders: false,
  orders: [],
  didOrderSubmit: false,
  didOrderSuccessfully: false,
  isErrorOrder: '',
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
      state.isLoadingOrders = action.payload;
    },
    setDidOrderSubmit(state, action: PayloadAction<boolean>) {
      state.didOrderSubmit = action.payload;
    },
    setDidOrderSuccessfully(state, action: PayloadAction<boolean>) {
      state.didOrderSuccessfully = action.payload;
    },
    setErrorOrder(state, action: PayloadAction<string>) {
      state.isErrorOrder = action.payload;
    },
  },
});
export const {
  setCheckoutOpen,
  setOrders,
  setLoadingOrder,
  setDidOrderSubmit,
  setDidOrderSuccessfully,
  setErrorOrder,
} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
