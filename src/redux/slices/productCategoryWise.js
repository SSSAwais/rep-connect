import { token } from "@/hooks/token";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: false,
  data: [],
};
export const productCategoryWise = createAsyncThunk(
  "productCategoryWise",
  async (slug) => {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_URL}api/product/category/${slug}`
    );
    const result = await resp.json();

    return result;
  }
);
export const productCateWisSlice = createSlice({
  name: "productCategoryWise",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(productCategoryWise.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(productCategoryWise.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data ? action.payload.data.product : [];
    });
    builder.addCase(productCategoryWise.rejected, (state, action) => {
      state.loading = true;
      state.error = false;
    });
  },
});

export default productCateWisSlice.reducer;
