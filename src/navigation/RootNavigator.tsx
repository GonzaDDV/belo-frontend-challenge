import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from 'src/screens/HomeScreen';
import { RootStackParamList } from 'src/ts/types';
import SwapNavigator from './SwapNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const navigatorOptions: NativeStackNavigationOptions = {
	headerShown: false,
};

const RootNavigator = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator screenOptions={navigatorOptions}>
				<RootStack.Screen name='Home' component={HomeScreen} />
				<RootStack.Screen name='Swap' component={SwapNavigator} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
