import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { registrationReducer } from './slices/registrationSlice';
import { appReducer } from './slices/appSlice';
import { productReducer } from './slices/ProductSlice';
import { cartReducer } from './slices/cartSlice';
import { orderReducer } from './slices/orderSlice';
import { userReducer } from './slices/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  userReducer: userReducer,
  cartReducer: cartReducer,
  orderReducer: orderReducer,
  productReducer: productReducer,
  registrationReducer: registrationReducer,
  appReducer: appReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,

});
export const persistor = persistStore(store);
// export const store = configureStore({
//   reducer: {
//     registrationReducer: registrationReducer,
//     appReducer: appReducer,
//     productReducer: productReducer,
//     cartReducer: cartReducer,
//     orderReducer: orderReducer,
//     userReducer: userReducer,
//   },
// });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
