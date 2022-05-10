import { createSlice } from '@reduxjs/toolkit';
import { user } from 'src/fake-db/user';

export interface SelectedCoin {
	key: string;
	amount: string;
}

interface SwapState {
	selectedCoins: SelectedCoin[];
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
	} as SwapState,
	reducers: {
		changeFirstCoin: (state, action) => {
			state.selectedCoins[0] = action.payload;
		},

		changeSecondCoin: (state, action) => {
			state.selectedCoins[1] = action.payload;
		},

		updateCoinAmount: (state, action) => {
			const { index, amount } = action.payload;
			state.selectedCoins[index] = {
				...state.selectedCoins[index],
				amount,
			};

			console.log(state.selectedCoins);
		},

		swapFirstAndSecond: state => {
			const [first, second] = state.selectedCoins;
			state.selectedCoins = [second, first];
		},
	},
	extraReducers: builder => {},
});

export const { changeFirstCoin, changeSecondCoin, swapFirstAndSecond, updateCoinAmount } = swapSlice.actions;
export default swapSlice.reducer;
