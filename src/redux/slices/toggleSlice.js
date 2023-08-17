import { createSlice } from "@reduxjs/toolkit";

const initial = {
  toggle: false,
};

export const toggleSlice = createSlice({
  name: "toggleslice",
  initialState: initial,
  reducers: {
    toggleMenu: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleMenu } = toggleSlice.actions;
export default toggleSlice.reducer;
