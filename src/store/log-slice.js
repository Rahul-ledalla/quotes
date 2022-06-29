import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "log",
  initialState: { logIn: false },
  reducers: {
    login(state) {
      state.logIn = !state.logIn;
    },
  },
});

export const logAction = logSlice.actions;

export default logSlice;
