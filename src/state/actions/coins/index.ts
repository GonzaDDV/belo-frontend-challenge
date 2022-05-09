import { AnyAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiErrorResponse } from 'apisauce';
import { CGCoin } from 'src/ts/types';
import { api } from 'src/utils/api';

// here I will insert the top 10 coins from CoinGecko, so the list doesn't get way too big
// thanks Copilot ;)
const first10Coins = [
	'bitcoin',
	'ethereum',
	'tether',
	'bitcoin-cash',
	'litecoin',
	'ripple',
	'eos',
	'binance-coin',
	'cardano',
	'stellar',
];

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
	const URLParams = new URLSearchParams();
	URLParams.append('ids', first10Coins.join(','));
	URLParams.append('vs_currency', 'usd');
	URLParams.append('order', 'market_cap_desc');
	URLParams.append('per_page', '10');
	URLParams.append('page', '1');
	URLParams.append('sparkline', 'false');

	const { data } = await api.get<CGCoin[]>('/coins/markets?' + URLParams.toString());

	const modifiedData = data
		? data.map(coin => ({
				...coin,
				symbol: coin.symbol.toUpperCase(),
		  }))
		: null;

	return modifiedData as CGCoin[];
});
