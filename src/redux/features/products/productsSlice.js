import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
        state.products = [];
      });
  },
});

export default productsSlice.reducer;
