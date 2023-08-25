import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await fetch(
      "https://toy-marketplace-server-six.vercel.app/products"
    );
    const data = res.json();

    return data;
  }
);
