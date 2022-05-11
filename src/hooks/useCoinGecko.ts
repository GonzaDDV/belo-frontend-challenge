import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCoins } from 'src/state/actions/coins';
import { RootState, useTypedDispatch } from 'src/state/store';

export const useCoinGecko = () => {
	const { coins, loading, user } = useSelector((state: RootState) => state.coins);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(fetchCoins(Object.keys(user.coins)));
	}, [user.coins]);

	return { coins, loading, user };
};
