import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productState = {
  loading: true,
  error: false,
  data: [],
};

export const product = createAsyncThunk("product", async () => {
  const respo = await fetch(`${process.env.NEXT_PUBLIC_URL}api/product`);
  const result = respo.json();
  return result;
});

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {
    increment: (state, action) => {
      console.log(state.data);
    },
    decrement: (state, action) => {
      console.log(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(product.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(product.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.products;
    });
    builder.addCase(product.rejected, (state, action) => {
      state.loading = true;
      state.error = true;
    });
  },
});

export const { increment, decrement } = productSlice.actions;
export default productSlice.reducer;
