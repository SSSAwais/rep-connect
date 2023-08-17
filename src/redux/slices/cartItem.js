import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { token } from "@/hooks/token";
const initialState = {
  loading: true,
  error: false,
  data: [],
};
export const cartItem = createAsyncThunk("cartItem", async () => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart`, {
    headers: {
      "x-auth-token": token(),
    },
    method: "GET",
  });
  const result = await resp.json();
  return result;
});

export const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(cartItem.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(cartItem.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.carts ? action.payload.data.carts : [];
    });
    builder.addCase(cartItem.rejected, (state, action) => {
      state.loading = true;
      state.error = true;
    });
  },
});

export default cartItemSlice.reducer;
