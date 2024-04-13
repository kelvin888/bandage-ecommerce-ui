import { RootState } from '@/store/store';
import { Product } from '@/types/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: Product[]; 
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
