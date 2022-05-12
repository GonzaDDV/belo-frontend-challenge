import { Button, ScreenMainView, Text } from "src/components/lib";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/ts/types";
import styles from "./SwapFailure.styles";

type SwapFailureScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Swap"
>;

const SwapFailureScreen = (props: SwapFailureScreenProps) => {
  const { navigation } = props;
  const animation = useRef(null);

  const goToHomeScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <ScreenMainView style={styles.mainContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={styles.animationContainer}
        source={require("src/animations/lottie/failure.json")}
        loop={false}
      />
      <Text style={styles.title} fontWeight="bold">
        We are sorry, your transaction failed.
      </Text>
      <Text style={styles.text} fontWeight="400">
        Contact us so we can provide more information about your transaction
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

export default SwapFailureScreen;
