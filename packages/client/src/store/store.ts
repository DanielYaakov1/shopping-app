import { configureStore } from '@reduxjs/toolkit';
import { registrationReducer } from './slices/registrationSlice';
import { appReducer } from './slices/appSlice';

export const store = configureStore({
     reducer: {
          registrationReducer: registrationReducer,
          appReducer: appReducer,
     },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
