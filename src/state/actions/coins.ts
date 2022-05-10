import { createAsyncThunk } from '@reduxjs/toolkit';
import { CGCoin } from 'src/ts/types';
import { api } from 'src/utils/api';
import { coinsSlice } from '../slices/coins';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async (ids: string[], thunkAPI) => {
	const URLParams = new URLSearchParams();
	URLParams.append('ids', ids.join(',').toLowerCase());
	URLParams.append('vs_currency', 'usd');
	URLParams.append('order', 'market_cap_desc');
	URLParams.append('per_page', '10');
	URLParams.append('page', '1');
	URLParams.append('sparkline', 'false');

	const { data } = await api.get<CGCoin[]>('/coins/markets?' + URLParams.toString());

	thunkAPI.dispatch(coinsSlice.actions.updateTotalValue(data || []));
	thunkAPI.dispatch(coinsSlice.actions.updateTotalPriceChange(data || []));

	const modifiedData = data
		? data.map(coin => ({
				...coin,
				symbol: coin.symbol.toUpperCase(),
		  }))
		: null;

	return modifiedData as CGCoin[];
});
