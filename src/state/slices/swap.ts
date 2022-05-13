import { createSlice } from "@reduxjs/toolkit";

export interface SelectedCoin {
  key: string;
  amount: number;
}

interface SwapState {
  selectedCoins: SelectedCoin[];
  error: string;
}

export const initialState: SwapState = {
  selectedCoins: [
    {
      key: "Bitcoin",
      amount: 0,
    },
    {
      key: "Tether",
      amount: 0,
    },
  ],
  error: "",
};

export const swapSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    changeFirstCoin: (state, action) => {
      // if user selects the coin that is on second place, swap them
      if (state.selectedCoins[1].key === action.payload.key) {
        const [first, second] = state.selectedCoins;
        state.selectedCoins = [second, first];
        return;
      }

      state.selectedCoins[0] = action.payload;
      state.error = "";
    },

    changeSecondCoin: (state, action) => {
      // if user selects the coin that is on first place, swap them
      if (state.selectedCoins[0].key === action.payload.key) {
        const [first, second] = state.selectedCoins;
        state.selectedCoins = [second, first];
        return;
      }

      state.selectedCoins[1] = action.payload;
      state.error = "";
    },

    updateCoinAmount: (state, action) => {
      const { index, amount }: { index: number; amount: number } =
        action.payload;

      state.selectedCoins[index] = {
        ...state.selectedCoins[index],
        amount,
      };
      state.error = "";
    },

    swapFirstAndSecond: (state) => {
      const [first, second] = state.selectedCoins;
      state.selectedCoins = [second, first];
      state.error = "";
    },

    updateErrorMessage: (state, action) => {
      state.error = action.payload;
    },

    resetSwapState: (state) => {
      state.selectedCoins = initialState.selectedCoins;
      state.error = "";
    },
  },
});

export const {
  changeFirstCoin,
  changeSecondCoin,
  swapFirstAndSecond,
  updateCoinAmount,
  updateErrorMessage,
  resetSwapState,
} = swapSlice.actions;
export default swapSlice.reducer;
