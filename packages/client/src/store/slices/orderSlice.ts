import { IShippingOrder } from './../../interfaces/Orders.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFullAddress {
  city: string;
  lastName: string;
  firstName: string;
  address1: string;
  country: string;
  zip: string;
}

interface SetFullAddressFieldPayload {
  data: string;
  field: keyof IFullAddress;
}

export interface IOrder {
  isCheckoutOpen: boolean;
  isLoadingOrders: boolean;
  orders: IShippingOrder[];
  didOrderSubmit: boolean;
  didOrderSuccessfully: boolean;
  isErrorOrder: string;
  fullAddress: IFullAddress;
}

const initialState: IOrder = {
  isCheckoutOpen: false,
  isLoadingOrders: false,
  orders: [],
  didOrderSubmit: false,
  didOrderSuccessfully: false,
  isErrorOrder: '',
  fullAddress: {
    city: '',
    lastName: '',
    firstName: '',
    address1: '',
    country: '',
    zip: '',
  },
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
    setAddressFields(state, action: PayloadAction<SetFullAddressFieldPayload>) {
      state.fullAddress[action.payload.field] = action.payload.data;
    },
    setFullAddress(state, action: PayloadAction<IFullAddress>) {
      state.fullAddress = action.payload;
    },
  },
});
export const {
  setCheckoutOpen,
  setAddressFields,
  setOrders,
  setLoadingOrder,
  setDidOrderSubmit,
  setDidOrderSuccessfully,
  setErrorOrder,
  setFullAddress,
} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
