import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CGCoin } from "src/ts/types";
import { api } from "src/utils/api";
import { getCoinByName } from "src/utils/coins";
import { SelectedCoin } from "./swap";

export const fetchCoins = createAsyncThunk(
  "coins/fetchCoins",
  async (ids: string[], thunkAPI) => {
    const URLParams = new URLSearchParams();
    URLParams.append("ids", ids.join(",").toLowerCase());
    URLParams.append("vs_currency", "usd");
    URLParams.append("order", "market_cap_desc");
    URLParams.append("per_page", "10");
    URLParams.append("page", "1");
    URLParams.append("sparkline", "false");

    const { data } = await api.get<CGCoin[]>(
      "/coins/markets?" + URLParams.toString()
    );

    thunkAPI.dispatch(coinsSlice.actions.updateTotalValue(data || []));
    thunkAPI.dispatch(coinsSlice.actions.updateTotalPriceChange(data || []));

    const modifiedData = data
      ? data.map((coin: CGCoin) => ({
          ...coin,
          symbol: coin.symbol.toUpperCase(),
        }))
      : null;

    return modifiedData as CGCoin[];
  }
);

export interface User {
  coins: SelectedCoin[];
  totalValue: number;
  totalPriceChange24hs: number;
  totalPriceChangePercentage24hs: number;
}

export interface CoinsState {
  coins: CGCoin[];
  loading: boolean;

  error: unknown;

  user: User;
}

export const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    loading: false,
    error: null,

    user: {
      coins: [{ key: "Ethereum", amount: 1 }],
      totalValue: 0,
      totalPriceChange24hs: 0,
      totalPriceChangePercentage24hs: 0,
    },
  } as CoinsState,
  reducers: {
    updateTotalValue: (state, action: PayloadAction<CGCoin[]>) => {
      const prices = action.payload.map(
        (coin) => [coin.name, coin.current_price] as [string, number]
      );

      const totalValue = prices.reduce(
        (acc, [name, price]) =>
          acc + (getCoinByName(state.user.coins, name)?.amount || 0) * +price,
        0
      );

      state.user.totalValue = totalValue;
    },

    updateTotalPriceChange: (state, action: PayloadAction<CGCoin[]>) => {
      const pricePercentages = action.payload.map((coin) => ({
        name: coin.name,
        changeTotal: coin.price_change_24h,
      }));

      const totalChanged = pricePercentages.reduce(
        (acc, { name, changeTotal }) =>
          acc +
          (getCoinByName(state.user.coins, name)?.amount || 0) * +changeTotal,
        0
      );

      if (totalChanged) {
        state.user.totalPriceChangePercentage24hs =
          (totalChanged / state.user.totalValue) * 100;
        state.user.totalPriceChange24hs = totalChanged;
      }
    },

    swapCoinsAmount: (state, action: PayloadAction<SelectedCoin[]>) => {
      const [first, second] = action.payload;
      const firstCoin = getCoinByName(state.user.coins, first.key);
      let secondCoin = getCoinByName(state.user.coins, second.key);
      if (!firstCoin || !secondCoin || firstCoin.index === -1) return;

      // if the user doesn't have the second coin, add it to the user coins array
      if (secondCoin.index === -1) {
        secondCoin = {
          index: state.user.coins.length,
          key: second.key,
          amount: 0,
        };
      }

      firstCoin.amount -= +first.amount;
      secondCoin.amount += +second.amount;

      state.user.coins[firstCoin.index] = firstCoin;
      state.user.coins[secondCoin.index] = secondCoin;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.coins = action.payload as CGCoin[];
      state.loading = false;
    });
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { swapCoinsAmount } = coinsSlice.actions;
export default coinsSlice.reducer;
