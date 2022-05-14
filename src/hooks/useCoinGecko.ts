import { useEffect } from "react";
import { useSelector } from "react-redux";
import { acceptedCoins } from "src/constants/acceptedCoins";
import { fetchCoins } from "src/state/slices/coins";
import { RootState, useTypedDispatch } from "src/state/store";

export const useCoinGecko = () => {
  const { coins, loading, user } = useSelector(
    (state: RootState) => state.coins
  );

  const dispatch = useTypedDispatch();

  const refetch = () => {
    dispatch(fetchCoins(acceptedCoins));
  };

  useEffect(() => {
    refetch();
  }, [acceptedCoins]);

  return { coins, loading, user, refetch };
};
