import { CGCoin } from "src/ts/types";
import { getCoinByName } from "src/utils/coins";
import { coinsSlice, CoinsState } from "./coins";

const initialState: CoinsState = {
  coins: [],
  loading: false,
  error: null,

  user: {
    coins: [
      { key: "Bitcoin", amount: 1 },
      { key: "Ethereum", amount: 1 },
      { key: "Tether", amount: 0 },
    ],
    totalValue: 0,
    totalPriceChange24hs: 0,
    totalPriceChangePercentage24hs: 0,
  },
};

describe("Coin slices", () => {
  it("should update total value", () => {
    const nextState = coinsSlice.reducer(
      initialState,
      coinsSlice.actions.updateTotalValue([
        { current_price: 1000, name: "Ethereum" } as CGCoin,
      ])
    );

    expect(nextState.user.totalValue).toEqual(1000);
  });

  it("should update total price change", () => {
    const nextState = coinsSlice.reducer(
      initialState,
      coinsSlice.actions.updateTotalPriceChange([
        { price_change_24h: 10, name: "Bitcoin" },
        { price_change_24h: 20, name: "Ethereum" },
      ] as CGCoin[])
    );

    expect(nextState.user.totalPriceChange24hs).toEqual(30);
  });

  it("should swap coins amount", () => {
    const nextState = coinsSlice.reducer(
      initialState,
      coinsSlice.actions.swapCoinsAmount([
        { key: "Ethereum", amount: 0.5 },
        { key: "Tether", amount: 1000 },
      ])
    );

    expect(getCoinByName(nextState.user.coins, "Ethereum").amount).toEqual(0.5);
    expect(getCoinByName(nextState.user.coins, "Tether").amount).toEqual(1000);
  });
});
