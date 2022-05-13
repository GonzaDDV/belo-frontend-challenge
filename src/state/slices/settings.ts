import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  showMoney: true,
  showNoBalanceCoins: true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleShowMoney: (state) => {
      state.showMoney = !state.showMoney;
    },

    toggleShowNoBalanceCoins: (state) => {
      state.showNoBalanceCoins = !state.showNoBalanceCoins;
    },
  },
});

export const { toggleShowMoney, toggleShowNoBalanceCoins } =
  settingsSlice.actions;
export default settingsSlice.reducer;
