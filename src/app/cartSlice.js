import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
        console.log('Adding to cart xd:', action.payload);
      const existingProduct = state.cartItems.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in the cart
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Add new product
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); // Remove product
    },
    increaseQuantity(state, action) {
      const product = state.cartItems.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity += 1; // Increase quantity
      }
    },
    decreaseQuantity(state, action) {
      const product = state.cartItems.find(item => item.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1; // Decrease quantity, but prevent going below 1
      }
    },
    
  },
});

// Export the actions
export const { addToCart, removeFromCart,decreaseQuantity, increaseQuantity } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
