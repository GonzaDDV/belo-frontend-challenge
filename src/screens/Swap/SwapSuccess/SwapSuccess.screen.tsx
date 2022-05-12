import { Button, ScreenMainView, Text } from "src/components/lib";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/ts/types";
import { useSelector } from "react-redux";
import { RootState, useTypedDispatch } from "src/state/store";
import { resetSwapState, SelectedCoin } from "src/state/slices/swap";
import styles from "./SwapSuccess.styles";

type SwapSuccessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Swap"
>;

const SwapSuccessScreen = (props: SwapSuccessScreenProps) => {
  const { selectedCoins } = useSelector((state: RootState) => state.swap);
  const [firstCoin, secondCoin]: SelectedCoin[] = selectedCoins;
  const dispatch = useTypedDispatch();

  const { navigation } = props;
  const animation = useRef(null);

  const goToHomeScreen = () => {
    dispatch(resetSwapState());
    navigation.navigate("Home");
  };

  return (
    <ScreenMainView style={styles.mainContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={styles.animationContainer}
        source={require("src/animations/lottie/success.json")}
        loop={false}
      />
      <Text style={styles.title} fontWeight="bold">
        Your transaction was completed!
      </Text>
      <Text style={styles.text} fontWeight="400">
        You succesfully swapped {firstCoin.amount} {firstCoin.key} for{" "}
        {secondCoin.amount} {secondCoin.key}
      </Text>
      <Button
        onPress={goToHomeScreen}
        text="Volver al inicio"
        size="m"
        style={styles.homeButton}
      />
    </ScreenMainView>
  );
};

export default SwapSuccessScreen;
