import { createSlice } from "@reduxjs/toolkit";

const popupState = {
  popupToggle: false,
};

export const popUpToggle = createSlice({
  name: "popUps",
  initialState: popupState,
  reducers: {
    togglePopUp: (state, action) => {
      console.log(action, "opne and close");
      state.popupToggle = !state.popupToggle;
    },
  },
});

export const { togglePopUp } = popUpToggle.actions;
export default popUpToggle.reducer;
