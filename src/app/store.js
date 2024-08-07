import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/api/apiSlice";
// import productsSlice from "../features/products/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    // product: productsSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, productApi.middleware),
});

export default store;
