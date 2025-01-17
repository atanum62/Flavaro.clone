import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'; // Import the reducer with a meaningful name
import CategorySlice from './slices/CatagorySlice';
import SearchSlice from './slices/SearchSlices';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the imported reducer here
    category: CategorySlice, // Use the imported reducer here
    search: SearchSlice, // Use the imported reducer here
  },
});

export default store;
