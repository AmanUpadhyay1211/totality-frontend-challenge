import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: { }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addCartItem: (state, action) => {
      state.cart.cartItem.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.cart.cartItem = state.cart.cartItem.filter(cartItem => cartItem !== action.payload);
    },
    addBookedItem: (state, action) => {
      state.cart.bookedItems.push(action.payload);
    },
    removeBookedItem: (state, action) => {
      state.cart.bookedItems = state.cart.bookedItems.filter(bookedItem => bookedItem !== action.payload);
    }
  }
});

export const { setCart, addCartItem, removeCartItem, addBookedItem, removeBookedItem } = cartSlice.actions;

export default cartSlice.reducer;
