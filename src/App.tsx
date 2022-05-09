import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GlobalProviders from './GlobalProviders';
import RootNavigator from './navigation/RootNavigator';

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
