import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    // cart: persistedCartReducer,
  },
});

// export const persistor = persistStore(store);
// export default store;
