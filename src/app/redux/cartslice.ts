import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  quantity?: number;
}

const cartSlice = createSlice({
  name: "Cart",
  initialState: [] as Product[], // Initial state as an array of Product
  reducers: {
    // Add item to the cart
    add(state, action: PayloadAction<Product>) {
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
        // If the item already exists, increment its quantity
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    // Remove item from the cart
    remove(state, action: PayloadAction<string>) {
      const existingItem = state.find((item) => item._id === action.payload);
      if (existingItem) {
        if (existingItem.quantity && existingItem.quantity > 1) {
          // If the item has a quantity greater than 1, decrement the quantity
          existingItem.quantity -= 1;
        } else {
          // If the item has a quantity of 1, remove it from the cart
          return state.filter((item) => item._id !== action.payload);
        }
      }
    },
     // Clear the cart
     clearCart: () => {
      return []; // Empty array resets the cart
    },
  },
});

export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;