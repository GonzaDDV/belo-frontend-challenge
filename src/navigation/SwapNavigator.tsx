import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import SwapConfirmationScreen from 'src/screens/Swap/SwapConfirmation';
import SwapFailure from 'src/screens/Swap/SwapFailureScreen';
import SwapScreen from 'src/screens/Swap/SwapScreen';
import SwapSuccess from 'src/screens/Swap/SwapSuccessScreen';
import { SwapStackParamList } from 'src/ts/types';

const SwapStack = createNativeStackNavigator<SwapStackParamList>();

const navigatorOptions: NativeStackNavigationOptions = {
	headerShown: false,
};

const SwapNavigator = () => {
	return (
		<SwapStack.Navigator screenOptions={navigatorOptions}>
			<SwapStack.Screen name='SwapHome' component={SwapScreen} />
			<SwapStack.Screen name='SwapConfirmation' component={SwapConfirmationScreen} />
			<SwapStack.Screen name='SwapSuccess' component={SwapSuccess} />
			<SwapStack.Screen name='SwapFailure' component={SwapFailure} />
		</SwapStack.Navigator>
	);
};

export default SwapNavigator;
