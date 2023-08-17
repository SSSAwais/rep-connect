import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const tagsState = {
  loading: true,
  error: false,
  data: [],
};
export const getTags = createAsyncThunk("getTags", async () => {
  try {
    const respone = await axios.get(
      "https://anxious-foal-shift.cyclic.app/api/mediatag"
    );
    return respone.data;
  } catch (error) {
    console.log(error);
  }
});

export const tagsSlice = createSlice({
  name: "getTags",
  initialState: tagsState,

  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getTags.fulfilled, (state, action) => {
        state.data = action.payload.data.tags;
        state.loading = false;
        state.error = false;
      })
      .addCase(getTags.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      });
  },
});
export default tagsSlice.reducer;
