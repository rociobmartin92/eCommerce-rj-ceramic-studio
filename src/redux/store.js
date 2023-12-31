import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";
import { productsApi } from "../services/productsApi";
import favoritesSlice from "./slices/favoritesSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    productSlice,
    userSlice,
    favoritesSlice,
    cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
