import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar />
			<RootNavigator />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
