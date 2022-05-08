import { theme } from 'src/constants/theme';
import { Token } from 'src/ts/types';

export const tokens: Array<Token> = [
	{
		name: 'Bitcoin',
		abbreviation: 'BTC',
		color: theme.colors.bitcoin,
		price: 45.231,
	},
	{
		name: 'Ethereum',
		abbreviation: 'ETH',
		color: theme.colors.ethereum,
		price: 2.946,
	},
	{
		name: 'Tether',
		abbreviation: 'USDT',
		color: theme.colors.usdt,
		price: 1,
	},
];
