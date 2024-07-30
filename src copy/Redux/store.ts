import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import cartSlice from "./slice/cartThunk";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: cartSlice,
  },
});