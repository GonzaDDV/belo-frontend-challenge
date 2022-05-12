import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import {
  SwapConfirmationScreen,
  SwapFailureScreen,
  SwapScreen,
  SwapSuccessScreen,
} from "src/screens/Swap";
import { SwapStackParamList } from "src/ts/types";

const SwapStack = createNativeStackNavigator<SwapStackParamList>();

const navigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const SwapNavigator = () => {
  return (
    <SwapStack.Navigator screenOptions={navigatorOptions}>
      <SwapStack.Screen name="SwapHome" component={SwapScreen} />
      <SwapStack.Screen
        name="SwapConfirmation"
        component={SwapConfirmationScreen}
      />
      <SwapStack.Screen name="SwapSuccess" component={SwapSuccessScreen} />
      <SwapStack.Screen name="SwapFailure" component={SwapFailureScreen} />
    </SwapStack.Navigator>
  );
};

export default SwapNavigator;
