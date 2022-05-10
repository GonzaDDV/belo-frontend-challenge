import { StyleSheet, View } from 'react-native';
import { Button, ScreenMainView, Text } from 'src/components/lib';
import { theme } from 'src/constants/theme';
import { width } from 'src/utils/sizing';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SwapStackParamList } from 'src/ts/types';
import { CommonActions } from '@react-navigation/native';
import { defaultStyles } from 'src/constants/styles';
import { RootState } from 'src/state/store';
import { useSelector } from 'react-redux';
import { SelectedCoin } from 'src/state/slices/swap';

type SwapConfirmationScreenProps = NativeStackScreenProps<SwapStackParamList, 'SwapConfirmation'>;

const SwapConfirmationScreen = (props: SwapConfirmationScreenProps) => {
	const { selectedCoins } = useSelector((state: RootState) => state.swap);
	const [firstCoin, secondCoin]: SelectedCoin[] = selectedCoins;

	const { navigation } = props;

	const confirmTransaction = () => {
		// to replace navigation history, so you can't go back with back button or gesture
		navigation.dispatch(
			CommonActions.reset({
				index: 0,
				routes: [{ name: 'SwapSuccess' }],
			})
		);
	};

	return (
		<ScreenMainView style={styles.mainContainer} showBackButton>
			<View style={styles.container}>
				<Text style={styles.title} fontWeight='bold'>
					Are you sure you want to confirm this transaction?
				</Text>
				<Text style={styles.text} fontWeight='400'>
					You will swap {firstCoin.amount} {firstCoin.key} for {secondCoin.amount} {secondCoin.key}
				</Text>
				<Button onPress={confirmTransaction} text='Confirm' size='m' style={styles.confirmButton} />
			</View>
		</ScreenMainView>
	);
};

export default SwapConfirmationScreen;

const styles = StyleSheet.create({
	mainContainer: {
		paddingTop: theme.spacing.xxl + theme.spacing.l,
		paddingHorizontal: theme.spacing.l,
		backgroundColor: theme.colors.white,
	},

	container: {
		flex: 1,
		justifyContent: 'center',
	},

	title: {
		fontSize: theme.fontSizes.l,
		textAlign: 'center',
		color: theme.colors.gray[800],
	},

	text: {
		fontSize: theme.fontSizes.m,
		textAlign: 'center',
		marginTop: theme.spacing.l,
	},

	confirmButton: {
		marginTop: theme.spacing.xl,
	},
});
