import { configureStore } from '@reduxjs/toolkit';
import { indexApi } from '../features/coach/Index';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    [indexApi.reducerPath]:indexApi.reducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(indexApi.middleware)

});
setupListeners(store.dispatch)
