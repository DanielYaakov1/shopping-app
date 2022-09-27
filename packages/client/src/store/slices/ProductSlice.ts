import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces';

export interface IProduct {
  isLoading: boolean;
  products: Product[];
  resultSearch: Product[];
}

const initialState: IProduct = {
  products: [],
  resultSearch: [],
  isLoading: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = [...state.products, ...action.payload];
    },
    resultProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});
export const { setProduct, addProduct, resultProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
