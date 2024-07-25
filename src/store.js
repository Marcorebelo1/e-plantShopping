// store.js
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from @reduxjs/toolkit
import cartReducer from './CartSlice'; // Import the reducer from CartSlice

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Associate the cartReducer with the 'cart' slice of the state
  },
});

export default store; // Export the configured store
