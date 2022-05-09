import { createSlice } from '@reduxjs/toolkit';
import { ApiErrorResponse } from 'apisauce';
import { CGCoin } from 'src/ts/types';
import { fetchCoins } from '../actions/coins';

const coinsSlice = createSlice({
	name: 'coins',
	initialState: {
		coins: [] as CGCoin[],
		loading: false,
		error: null as unknown,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCoins.pending, state => {
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

export default coinsSlice.reducer;
