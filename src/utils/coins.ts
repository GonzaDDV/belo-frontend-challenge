import { CGCoin } from 'src/ts/types';

interface Params {
	firstCoinAmount: number;
	firstCoinPrice: number;
	secondCoinPrice: number;
}

export const getEquivalentAmountInOtherCoin = ({ firstCoinAmount, firstCoinPrice, secondCoinPrice }: Params) => {
	return ((firstCoinPrice * firstCoinAmount) / secondCoinPrice).toFixed(3);
};

export const getCoinPriceFromCoinArray = (coinArray: CGCoin[], coinName: string) => {
	const coin = coinArray.find(coin => coin.name === coinName);
	if (!coin) return 0;
	return coin.current_price;
};
