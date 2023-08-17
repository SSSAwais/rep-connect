import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const postGetAllTags = {
  loading: true,
  error: false,
  data: [],
};
export const getAllPostTags = createAsyncThunk("getAllPostTags", async () => {
  try {
    const response = await axios.get(
      "https://anxious-foal-shift.cyclic.app/api/tag"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const postTagsSlice = createSlice({
  name: "postTags",
  initialState: postGetAllTags,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostTags.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllPostTags.fulfilled, (state, action) => {
        state.data = action.payload.data.tag;
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllPostTags.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export default postTagsSlice.reducer;
