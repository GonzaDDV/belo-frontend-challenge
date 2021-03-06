import { SelectedCoin } from "src/state/slices/swap";
import { store } from "src/state/store";
import { CGCoin } from "src/ts/types";

interface Params {
  firstCoinAmount: number;
  firstCoinPrice: number;
  secondCoinPrice: number;
}

export const getEquivalentAmountInOtherCoin = ({
  firstCoinAmount,
  firstCoinPrice,
  secondCoinPrice,
}: Params) => {
  return ((firstCoinPrice * firstCoinAmount) / secondCoinPrice).toFixed(3);
};

export const getCoinPriceFromCoinArray = (
  coinArray: CGCoin[],
  coinName: string
) => {
  const coin = coinArray.find((coin) => coin.name === coinName);
  if (!coin) return 0;
  return coin.current_price;
};

export const cgCoinToSwapStateCoin = (coins: CGCoin[]): SelectedCoin[] => {
  return coins.map((coin) => ({ key: coin.name, amount: 0 }));
};

export const getCoinByName = (coins: SelectedCoin[], coinName: string) => {
  if (!coinName || !coins) return { index: -1, key: coinName, amount: 0 };
  const index = coins.findIndex((coin) => coin.key === coinName);

  return { ...coins[index], index };
};

export const showCensoredMoney = (
  originalText: string,
  showMoney: boolean,
  length: number,
  showDollarSign = true
) => {
  let initialString = showDollarSign ? "$" : "";

  if (showMoney) return initialString + originalText;

  for (let i = 0; i < length; i++) {
    initialString += "*";
  }

  return initialString;
};
