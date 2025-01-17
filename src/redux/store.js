import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'; // Import the reducer with a meaningful name
import CategorySlice from './slices/CatagorySlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the imported reducer here
    category: CategorySlice, // Use the imported reducer here
  },
});

export default store;
