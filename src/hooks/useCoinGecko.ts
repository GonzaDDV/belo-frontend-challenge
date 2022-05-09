import { ApiErrorResponse } from 'apisauce';
import { useEffect, useState } from 'react';
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

export const useCoinGecko = () => {
	const [coins, setCoins] = useState<CGCoin[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<ApiErrorResponse<unknown> | null>(null);

	const fetchCoins = async () => {
		setLoading(true);
		setError(null);

		try {
			const URLParams = new URLSearchParams();
			URLParams.append('ids', first10Coins.join(','));
			URLParams.append('vs_currency', 'usd');
			URLParams.append('order', 'market_cap_desc');
			URLParams.append('per_page', '10');
			URLParams.append('page', '1');
			URLParams.append('sparkline', 'false');

			const response = await api.get<CGCoin[]>('/coins/markets?' + URLParams.toString());

			const modifiedData = (data: CGCoin[] | undefined) =>
				data
					? data.map(coin => ({
							...coin,
							symbol: coin.symbol.toUpperCase(),
					  }))
					: null;

			setCoins(modifiedData(response.data) || []);
		} catch (error: unknown) {
			setError(error as ApiErrorResponse<unknown>);
		}

		setLoading(false);
	};

	useEffect(() => {
		fetchCoins();
	}, []);

	return { coins, loading, error };
};
