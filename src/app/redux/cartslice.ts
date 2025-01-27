'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define CartItem interface
interface Product {
    _id: string;
    title: string;
    productImage: {
        asset: {
            url: string;
        };
    };
    price: number;
    isNew: boolean;
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: [] as Product[], // initial state as an array of CartItem
  reducers: {
    // Add item to the cart
    add(state, action: PayloadAction<Product>) {
      state.push(action.payload);
    },
    // Remove item from the cart
    remove(state, action: PayloadAction<string>) {
      return state.filter((item: Product) => item._id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
