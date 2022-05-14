import { View } from "react-native";
import styles from "./SwapConfirmation.styles";
import { Button, ScreenMainView, Text } from "src/components/lib";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SwapStackParamList } from "src/ts/types";
import { CommonActions } from "@react-navigation/native";
import { RootState, useTypedDispatch } from "src/state/store";
import { useSelector } from "react-redux";
import { SelectedCoin } from "src/state/slices/swap";
import { swapCoinsAmount } from "src/state/slices/coins";

type SwapConfirmationScreenProps = NativeStackScreenProps<
  SwapStackParamList,
  "SwapConfirmation"
>;

const SwapConfirmationScreen = (props: SwapConfirmationScreenProps) => {
  const { selectedCoins } = useSelector((state: RootState) => state.swap);
  const [firstCoin, secondCoin]: SelectedCoin[] = selectedCoins;
  const dispatch = useTypedDispatch();

  const { navigation } = props;

  const confirmTransaction = () => {
    let name: keyof SwapStackParamList = "SwapSuccess";
    try {
      dispatch(swapCoinsAmount([firstCoin, secondCoin]));
    } catch {
      name = "SwapFailure";
    } finally {
      // to replace navigation history, so you can't go back with back button or gesture
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name }],
        })
      );
    }
  };

  return (
    <ScreenMainView style={styles.mainContainer} showBackButton>
      <View style={styles.container}>
        <Text style={styles.title} fontWeight="bold">
          Do you want to confirm this transaction?
        </Text>
        <Text style={styles.text} fontWeight="400">
          You will swap {firstCoin.amount} {firstCoin.key} for{" "}
          {secondCoin.amount} {secondCoin.key}
        </Text>
        <Button
          onPress={confirmTransaction}
          text="Confirm"
          size="m"
          style={styles.confirmButton}
        />
      </View>
    </ScreenMainView>
  );
};

export default SwapConfirmationScreen;
