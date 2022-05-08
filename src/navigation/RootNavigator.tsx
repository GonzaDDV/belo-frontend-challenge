import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from 'src/screens/Home';
import SwapScreen from 'src/screens/Swap';
import { RootStackParamList } from 'src/ts/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const navigatorOptions: NativeStackNavigationOptions = {
	headerShown: false,
};

const RootNavigator = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator screenOptions={navigatorOptions}>
				<RootStack.Screen name='Home' component={HomeScreen} />
				<RootStack.Screen name='Swap' component={SwapScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;