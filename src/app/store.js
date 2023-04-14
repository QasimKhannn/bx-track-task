import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../features/booksSlice";
export const store = configureStore({
  reducer: {
    // authSlice: authReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
  devTools: true,
});
