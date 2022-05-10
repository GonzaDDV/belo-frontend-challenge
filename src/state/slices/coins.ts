import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { user } from 'src/fake-db/user';
import { CGCoin } from 'src/ts/types';
import { fetchCoins } from '../actions/coins';

interface User {
	coins: typeof user.coins;
	totalValue: number;
}

interface CoinsState {
	coins: CGCoin[];
	loading: boolean;

	error: unknown;

	user: User;
}

export const coinsSlice = createSlice({
	name: 'coins',
	initialState: {
		coins: [],
		loading: false,
		error: null,

		user: {
			coins: user.coins,
			totalValue: 0,
		},
	} as CoinsState,
	reducers: {
		updateTotalValue: (state, action: PayloadAction<CGCoin[]>) => {
			const prices = action.payload.map(coin => [coin.name, coin.current_price]);

			const totalValue = prices.reduce(
				(acc, [name, price]) => acc + user.coins[name as keyof typeof user.coins].amount * +price,
				0
			);

			state.user.totalValue = totalValue;
		},
	},
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
