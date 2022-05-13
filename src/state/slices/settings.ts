import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  showMoney: true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleShowMoney: (state) => {
      state.showMoney = !state.showMoney;
    },
  },
});

export const { toggleShowMoney } = settingsSlice.actions;
export default settingsSlice.reducer;
