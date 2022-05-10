import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, LogBox } from 'react-native';
import GlobalProviders from './GlobalProviders';
import RootNavigator from './navigation/RootNavigator';

// This is not a good practice, but the Lottie library creator stated that in a few days
// this warning will be fixed, so we will just ignore it until then.
LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);

export default function App() {
	return (
		<GlobalProviders>
			<View style={styles.container}>
				<StatusBar />
				<RootNavigator />
			</View>
		</GlobalProviders>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
