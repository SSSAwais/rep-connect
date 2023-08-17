import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  opend: false,
};

export const adminSidebarSlice = createSlice({
  name: "adminsidebar",
  initialState: initalState,
  reducers: {
    adminSideBarOpned: (state) => {
      state.opend = !state.opend;
    },
  },
});

export const { adminSideBarOpned } = adminSidebarSlice.actions;
export default adminSidebarSlice.reducer;
