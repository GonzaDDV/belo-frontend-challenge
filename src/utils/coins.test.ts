import { SelectedCoin } from "src/state/slices/swap";
import { CGCoin } from "src/ts/types";
import {
  cgCoinToSwapStateCoin,
  getCoinByName,
  getCoinPriceFromCoinArray,
  getEquivalentAmountInOtherCoin,
} from "./coins";

describe("Coin utils", () => {
  it("should get equivalent amount in other coin", () => {
    const firstCoinPrice = 100;
    const firstCoinAmount = 10;
    const secondCoinPrice = 200;

    expect(
      getEquivalentAmountInOtherCoin({
        firstCoinAmount,
        firstCoinPrice,
        secondCoinPrice,
      })
    ).toBe("5.000");
  });

  it("should get coin price from coin array", () => {
    const coinArray = [
      { name: "Ethereum", current_price: 100 },
      { name: "Tether", current_price: 1 },
    ];

    expect(getCoinPriceFromCoinArray(coinArray as CGCoin[], "Ethereum")).toBe(
      100
    );
    expect(getCoinPriceFromCoinArray(coinArray as CGCoin[], "fake_coin")).toBe(
      0
    );
  });

  it("should convert array of CGCoin to array of SwapStateCoin", () => {
    const coins = [{ name: "Ethereum" }, { name: "Tether" }];

    const swapStateCoin = cgCoinToSwapStateCoin(coins as CGCoin[]);

    expect(swapStateCoin).toEqual([
      { key: "Ethereum", amount: 0 },
      { key: "Tether", amount: 0 },
    ]);
  });

  it("should get coin by name", () => {
    const coins = [{ key: "Ethereum" }, { key: "Tether" }];

    expect(getCoinByName(coins as SelectedCoin[], "Ethereum").key).toEqual(
      "Ethereum"
    );
    expect(
      getCoinByName(coins as SelectedCoin[], "fake_coin").key
    ).toBeUndefined();
  });
});
