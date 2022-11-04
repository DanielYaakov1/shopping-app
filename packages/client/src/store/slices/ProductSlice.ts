import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces';

export interface IProduct {
  isLoadingProducts: boolean;
  products: Product[];
  resultSearch: Product[];
}

const initialState: IProduct = {
  products: [],
  resultSearch: [],
  isLoadingProducts: false,
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
    setLoadingProducts(state, action: PayloadAction<boolean>) {
      state.isLoadingProducts = action.payload;
    },
  },
});
export const { setProduct, addProduct, resultProduct, setLoadingProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
