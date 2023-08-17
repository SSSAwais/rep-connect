import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: true,
  error: false,
  data: [],
};
export const product_api = createAsyncThunk(
  "single_product_slice",
  async (id) => {
    const respo = await fetch(
      `${process.env.NEXT_PUBLIC_URL}api/product/${id}`
    );
    const result = respo.json();
    return result;
  }
);

export const single_product_slice = createSlice({
  name: "single_product_slice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(product_api.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(product_api.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data?.product
        ? action.payload.data.product
        : [];
    });
    builder.addCase(product_api.rejected, (state, action) => {
      state.loading = true;
      state.error = true;
    });
  },
});

export default single_product_slice.reducer;
