import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: false,
  data: [],
};

export const categoryFilter = createAsyncThunk(
  "categoryFilter",
  async (name, slug) => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_URL}api/post/filter`, {
      name: name,
      slug: slug,
      method: "POST",
    });
    const result = await resp.json();
    return result;
  }
);

export const catItemSlice = createSlice({
  name: "categoryFilter",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(categoryFilter.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(categoryFilter.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.data ? action.payload.data.data : [];
      console.log(state.data, "redux");
    });
    builder.addCase(categoryFilter.rejected, (state, action) => {
      state.loading = true;
      state.error = true;
    });
  },
});

export default catItemSlice.reducer;
