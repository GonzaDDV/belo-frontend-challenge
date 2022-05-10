import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { user } from 'src/fake-db/user';
import { CGCoin } from 'src/ts/types';
import { fetchCoins } from '../actions/coins';

interface User {
	coins: typeof user.coins;
	totalValue: number;
	totalPriceChange24hs: number;
	totalPriceChangePercentage24hs: number;
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
			totalPriceChange24hs: 0,
			totalPriceChangePercentage24hs: 0,
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

		updateTotalPriceChange: (state, action: PayloadAction<CGCoin[]>) => {
			const pricePercentages = action.payload.map(coin => ({
				name: coin.name,
				changePercentage: coin.price_change_percentage_24h,
				changeTotal: coin.price_change_24h,
			}));

			const totalChanged = pricePercentages.reduce(
				(acc, { name, changeTotal }) => acc + user.coins[name as keyof typeof user.coins].amount * +changeTotal,
				0
			);
			const totalPercentage = pricePercentages.reduce((acc, { changePercentage }) => acc + +changePercentage, 0);

			state.user.totalPriceChange24hs = totalChanged;
			state.user.totalPriceChangePercentage24hs = totalPercentage;
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
