"use client"
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;