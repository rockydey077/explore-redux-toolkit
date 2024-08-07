import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct, fetchProducts, postProduct } from "./productsAPI";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  deleteSuccess: false,
  error: "",
  postSuccess: false,
};

export const getProducts = createAsyncThunk("products/getProducts", () => {
  const products = fetchProducts();
  return products;
});

export const addProduct = createAsyncThunk("products/addProduct", (data) => {
  const response = postProduct(data);
  return response;
});

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  (id, thunkAPI) => {
    const response = deleteProduct(id);
    thunkAPI.dispatch(removeFromList(id));
    return response;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    togglePostSuccess: (state) => {
      state.postSuccess = false;
    },
    toggleDeleteSuccess: (state) => {
      state.deleteSuccess = false;
    },
    removeFromList: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
        state.postSuccess = false;
        state.isError = false;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.postSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.products = [];
        state.postSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(removeProduct.pending, (state) => {
        state.isLoading = true;
        state.deleteSuccess = false;
        state.isError = false;
      })
      .addCase(removeProduct.fulfilled, (state) => {
        state.deleteSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.products = [];
        state.deleteSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { togglePostSuccess, toggleDeleteSuccess, removeFromList } =
  productsSlice.actions;

export default productsSlice.reducer;
