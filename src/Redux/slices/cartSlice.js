import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   userID: "aman123",
    //   email : "aman@gmail.com",
    //   userName: "Aman Upadhyay",
    //   cartItems : [{},{}],
    //   bookedItems : [{},{}],
    // },
  ]
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addCartItem: (state, action) => {
      const userCart = state.cart.find(cart => cart.userID === action.payload.userID);
      if (userCart) {
        userCart.cartItems.push(action.payload.item);
      }
    },
    removeCartItem: (state, action) => {
      const userCart = state.cart.find(cart => cart.userID === action.payload.userID);
      if (userCart) {
        userCart.cartItems = userCart.cartItems.filter(cartItem => cartItem !== action.payload.item);
      }
    },
    addBookedItem: (state, action) => {
      const userCart = state.cart.find(cart => cart.userID === action.payload.userID);
      if (userCart) {
        userCart.bookedItems.push(action.payload.item);
        userCart.cartItems = userCart.cartItems.filter(cartItem => cartItem !== action.payload.item);
      }
    },
    removeBookedItem: (state, action) => {
      const userCart = state.cart.find(cart => cart.userID === action.payload.userID);
      if (userCart) {
        userCart.bookedItems = userCart.bookedItems.filter(bookedItem => bookedItem !== action.payload.item);
      }
    }
  },
});

export const { createCart, addCartItem, removeCartItem, addBookedItem, removeBookedItem } = cartSlice.actions;

export default cartSlice.reducer;
