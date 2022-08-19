import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces';

export interface IProduct {
     isLoading: boolean;
     products: Product[];
     items: any[];
     totalAmount: number;
}

const initialState: IProduct = {
     products: [],
     isLoading: false,
     items: [],
     totalAmount: 0,
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
          addItem(state, { payload: product }) {
               const newTotalAmount = state.totalAmount + product.price * product.amount;
               const existCartItemIndex = state.items.findIndex(i => i.id === product.id);
               const existCartItem = state.items[existCartItemIndex];
               let updateItems;
               if (existCartItem) {
                    const updateItem = {
                         ...existCartItem,
                         amount: existCartItem.amount + product.amount,
                    };
                    updateItems = [...state.items];
                    updateItems[existCartItemIndex] = updateItem;
               } else {
                    updateItems = state.items.concat(product);
               }
               state.items = updateItems;
               state.totalAmount = newTotalAmount;
          },
     },
});
export const { setProduct, addProduct, addItem } = productSlice.actions;
export const productReducer = productSlice.reducer;
