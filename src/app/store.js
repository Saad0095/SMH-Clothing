//store
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import productReducer from './productSlice';
import cartReducer from './cartSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);
export default store;
