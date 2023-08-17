const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: true,
  data: [],
  error: false,
};

export const productCategoy = createAsyncThunk("productCategoy", async () => {
  const respo = await fetch(
    `${process.env.NEXT_PUBLIC_URL}api/product-category`
  );
  const result = respo.json();
  return result;
});

export const productCategorySlice = createSlice({
  name: "productCategoy",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(productCategoy.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(productCategoy.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.category
        ? action.payload.data.category
        : [];
    });
    builder.addCase(productCategoy.rejected, (state, action) => {
      state.loading = true;
      state.error = true;
    });
  },
});
export default productCategorySlice.reducer;
