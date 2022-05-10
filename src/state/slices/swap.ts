import { createSlice } from '@reduxjs/toolkit';
import { getEquivalentAmountInOtherCoin } from 'src/utils/coins';

export interface SelectedCoin {
	key: string;
	amount: string;
}

interface SwapState {
	selectedCoins: SelectedCoin[];
	error: string;
}

const swapSlice = createSlice({
	name: 'coins',
	initialState: {
		selectedCoins: [
			{
				key: 'Ethereum',
				amount: '',
			},
			{
				key: 'Tether',
				amount: '',
			},
		],
		error: '',
	} as SwapState,
	reducers: {
		changeFirstCoin: (state, action) => {
			state.selectedCoins[0] = action.payload;
			state.error = '';
		},

		changeSecondCoin: (state, action) => {
			state.selectedCoins[1] = action.payload;
			state.error = '';
		},

		updateCoinAmount: (state, action) => {
			const { index, amount } = action.payload;
			state.selectedCoins[index] = {
				...state.selectedCoins[index],
				amount,
			};
			state.error = '';
		},

		swapFirstAndSecond: state => {
			const [first, second] = state.selectedCoins;
			state.selectedCoins = [second, first];
			state.error = '';
		},

		updateErrorMessage: (state, action) => {
			state.error = action.payload;
		},
	},
	extraReducers: builder => {},
});

export const { changeFirstCoin, changeSecondCoin, swapFirstAndSecond, updateCoinAmount, updateErrorMessage } =
	swapSlice.actions;
export default swapSlice.reducer;
