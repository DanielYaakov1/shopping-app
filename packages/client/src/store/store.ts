import { configureStore } from '@reduxjs/toolkit';
import { registrationReducer } from './slices/registrationSlice';
import { appReducer } from './slices/appSlice';
import { productReducer } from './slices/ProductSlice';

export const store = configureStore({
     reducer: {
          registrationReducer: registrationReducer,
          appReducer: appReducer,
          productReducer: productReducer,
     },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
