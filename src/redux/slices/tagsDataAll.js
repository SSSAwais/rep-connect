import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const tagsDataAllState = {
  loading: true,
  error: false,
  data: [],
};
export const tagsDataAll = createAsyncThunk(
  "tagsDataAll",
  async (apiEndpoint, thunkAPI) => {
    try {
      const response = await axios.get(apiEndpoint);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }
);

export const tagsDataAllSlice = createSlice({
  name: "tagsDataAll",
  initialState: tagsDataAllState,
  extraReducers: (builder) => {
    builder
      .addCase(tagsDataAll.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(tagsDataAll.fulfilled, (state, action) => {
        state.data =
          action.payload.data !== undefined ? action.payload.data.media : [];
        state.loading = false;
        state.error = false;
      })
      .addCase(tagsDataAll.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default tagsDataAllSlice.reducer;
