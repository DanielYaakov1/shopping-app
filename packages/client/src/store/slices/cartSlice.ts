import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IItems {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  amount: number;
}

export interface ICart {
  items: IItems[];
  totalAmount: number;
  isCartModalOpen: boolean;
}

const initialState: ICart = {
  items: [],
  totalAmount: 0,
  isCartModalOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, { payload: product }) {
      const newTotalAmount = state.totalAmount + product.price * product.amount;
      const existCartItemIndex = state.items.findIndex((i) => i._id === product._id);
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
    deleteItemFromCart(state, { payload: _id }) {
      const existCartItemIndex = state.items.findIndex((item) => item._id === _id);
      const existCartItem = state.items[existCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existCartItem.price;
      let updateItems;
      if (existCartItem.amount === 1) {
        updateItems = state.items.filter((item) => item._id !== _id);
      } else {
        const updateItem = { ...existCartItem, amount: existCartItem.amount - 1 };
        updateItems = [...state.items];
        updateItems[existCartItemIndex] = updateItem;
      }
      state.items = updateItems;
      state.totalAmount = updatedTotalAmount;
    },
    setCartModalOpen(state, action: PayloadAction<boolean>) {
      state.isCartModalOpen = action.payload;
    },
    setItems(state, action: PayloadAction<IItems[]>) {
      state.items = action.payload;
    },
    updateAllCartState(state, action: PayloadAction<any>) {
      state.items = action.payload;
      state.totalAmount = action.payload;
      state.isCartModalOpen = action.payload;
    },
  },
});
export const { addItemToCart, deleteItemFromCart, setCartModalOpen, setItems, updateAllCartState } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
