import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IItems {
  id: string;
  name: string;
  price: number;
  //description: string;
  image: string;
  amount: number;
}

export interface ICart {
  items: IItems[];
  totalAmount: number;
}

const initialState: ICart = {
  items: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload: product }) {
      const newTotalAmount = state.totalAmount + product.price * product.amount;
      const existCartItemIndex = state.items.findIndex((i) => i.id === product.id);
      debugger;
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
export const { addItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
