import { RootState } from '@/store/store';
import { Product } from '@/types/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
  items: Product[]; 
}

const initialState: WishlistState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export const selectWishlistItems = (state: RootState) => state.wishlist.items;

export default wishlistSlice.reducer;
