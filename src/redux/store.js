import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'; // Import the reducer with a meaningful name

const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the imported reducer here
  },
});

export default store;
