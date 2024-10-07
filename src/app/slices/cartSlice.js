import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    increaseQuantity: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseQuantity: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify([]));
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
