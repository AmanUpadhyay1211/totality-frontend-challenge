import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    userID: null,
    email: null,
    userName: null,
    cartItems: [],
    bookedItems: []
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addCartItem: (state, action) => {
      state.cart.cartItems.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.cart.cartItems = state.cart.cartItems.filter(cartItem => cartItem !== action.payload);
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
