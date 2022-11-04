import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IItems {
  name: string;
  price: number;
  description: string;
  image: string;
  amount: number;
  productId: string;
}

export interface ICart {
  items: IItems[];
  totalAmount: number;
  isCartModalOpen: boolean;
}

export const cartInitialState: ICart = {
  items: [],
  totalAmount: 0,
  isCartModalOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, { payload: product }) {
      debugger;
      const newTotalAmount = state.totalAmount + product.price * product.amount;
      const existCartItemIndex = state.items.findIndex((i) => i.productId === product.productId);
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
    deleteItemFromCart(state, { payload: productId }) {
      const existCartItemIndex = state.items.findIndex((item) => item.productId === productId);
      const existCartItem = state.items[existCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existCartItem.price;
      let updateItems;
      if (existCartItem.amount === 1) {
        updateItems = state.items.filter((item) => item.productId !== productId);
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
    updateAllCartState(state, action: PayloadAction<ICart>) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.isCartModalOpen = action.payload.isCartModalOpen;
    },
  },
});
export const { addItemToCart, deleteItemFromCart, setCartModalOpen, setItems, updateAllCartState } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
