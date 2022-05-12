import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text, ScreenMainView, Button } from "src/components/lib";
import { SwapStackParamList } from "src/ts/types";
import { SwapButton, SwapInput } from "src/components/atoms";
import { useSelector } from "react-redux";
import { RootState, useTypedDispatch } from "src/state/store";
import {
  changeFirstCoin,
  changeSecondCoin,
  SelectedCoin,
  swapFirstAndSecond,
  updateCoinAmount,
  updateErrorMessage,
} from "src/state/slices/swap";
import { useEffect, useMemo } from "react";
import {
  getCoinByName,
  getCoinPriceFromCoinArray,
  getEquivalentAmountInOtherCoin,
} from "src/utils/coins";
import styles from "./Swap.styles";

type SwapScreenProps = NativeStackScreenProps<SwapStackParamList, "SwapHome">;

const SwapScreen = (props: SwapScreenProps) => {
  const { coins, user } = useSelector((state: RootState) => state.coins);
  const { selectedCoins, error } = useSelector(
    (state: RootState) => state.swap
  );
  const dispatch = useTypedDispatch();

  const [firstCoin, secondCoin]: SelectedCoin[] = selectedCoins;

  const navigateToSwapConfirmationScreen = () => {
    if (firstCoin.amount > maxAmount) {
      return dispatch(
        updateErrorMessage("You don't have enough amount to swap.")
      );
    }
    if (!firstCoin.amount || firstCoin.amount <= 0) {
      return dispatch(updateErrorMessage("Please, enter an amount."));
    }
    props.navigation.navigate("SwapConfirmation");
  };

  const handleSwapButtonPress = () => {
    dispatch(swapFirstAndSecond());
  };

  const maxAmount = useMemo(
    () => getCoinByName(user.coins, firstCoin.key)?.amount || 0,
    [user, firstCoin.key]
  );

  const handleMaxButtonPress = () => {
    dispatch(updateCoinAmount({ amount: maxAmount, index: 0 }));
  };

  const handleFirstCoinAmountChange = (amount: string) => {
    dispatch(updateCoinAmount({ amount, index: 0 }));
  };

  useEffect(() => {
    dispatch(
      updateCoinAmount({
        amount: secondCoin.key
          ? getEquivalentAmountInOtherCoin({
              firstCoinAmount: firstCoin.amount || 0,
              firstCoinPrice: getCoinPriceFromCoinArray(coins, firstCoin.key),
              secondCoinPrice: getCoinPriceFromCoinArray(coins, secondCoin.key),
            })
          : 0,
        index: 1,
      })
    );
  }, [firstCoin, secondCoin.key]);

  const changeCoinValue = (coin: SelectedCoin, index: number) => {
    if (index === 0) {
      dispatch(changeFirstCoin(coin));
    } else {
      dispatch(
        changeSecondCoin({
          key: coin.key,
          amount: getEquivalentAmountInOtherCoin({
            firstCoinAmount: firstCoin.amount || 0,
            firstCoinPrice: getCoinPriceFromCoinArray(coins, firstCoin.key),
            secondCoinPrice: getCoinPriceFromCoinArray(coins, secondCoin.key),
          }),
        })
      );
    }
  };

  return (
    <ScreenMainView style={styles.mainContainer} showBackButton>
      <Text style={styles.title} fontWeight="bold">
        Swap cryptocurrencies
      </Text>

      <View>
        <SwapInput
          topLabel="Selling"
          placeholder="0"
          maxAmount={maxAmount}
          onMaxAmountPress={handleMaxButtonPress}
          stateValue={firstCoin}
          onChangeText={handleFirstCoinAmountChange}
          handleCoinChange={(item) => changeCoinValue(item, 0)}
          value={firstCoin.amount.toString()}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <SwapButton onPress={handleSwapButtonPress} />
        <SwapInput
          topLabel="Buying"
          placeholder="0"
          editable={false}
          stateValue={secondCoin}
          handleCoinChange={(item) => changeCoinValue(item, 1)}
          value={secondCoin.amount.toString()}
        />
        <Button
          onPress={navigateToSwapConfirmationScreen}
          text="Swap"
          size="m"
          style={styles.button}
        />
      </View>
    </ScreenMainView>
  );
};

export default SwapScreen;
