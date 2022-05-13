import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import HomeScreen from "src/screens/Home/Home.screen";
import SettingsScreen from "src/screens/Settings/Settings.screen";
import SwapNavigator from "./SwapNavigator";
import { RootStackParamList } from "src/ts/types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const navigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={navigatorOptions}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Swap" component={SwapNavigator} />
        <RootStack.Screen name="Settings" component={SettingsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
