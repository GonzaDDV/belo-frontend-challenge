import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Text, ScreenMainView, RoundedButton, Button, BackButton } from 'src/components/lib';
import { theme } from 'src/constants/theme';
import { SwapStackParamList } from 'src/ts/types';
import { SwapInput } from 'src/components/atoms/SwapScreen';

type SwapScreenProps = NativeStackScreenProps<SwapStackParamList, 'SwapHome'>;

const SwapScreen = (props: SwapScreenProps) => {
	const { navigation } = props;
	const navigateToSwapSuccessScreen = () => {
		// to replace navigation history, so you can't go back with back button or gesture
		navigation.dispatch(
			CommonActions.reset({
				index: 0,
				routes: [{ name: 'SwapFailure' }],
			})
		);
	};

	return (
		<ScreenMainView style={styles.mainContainer} showBackButton>
			<Text style={styles.title} fontWeight='bold'>
				Swap cryptocurrencies
			</Text>

			<View>
				<SwapInput topLabel='Selling' token='Ethereum' placeholder='0.03 ETH' maxAmount={0.03} />

				<RoundedButton style={styles.swapButton} size='m' icon='swap-calls' isSecondary />

				<SwapInput topLabel='Buying' token='Tether' placeholder='120.50 USDT' />

				<Button onPress={navigateToSwapSuccessScreen} text='Swap' size='m' style={styles.swapButton} />
			</View>
		</ScreenMainView>
	);
};

export default SwapScreen;

const styles = StyleSheet.create({
	mainContainer: {
		paddingTop: theme.spacing.xxl + theme.spacing.l,
		paddingHorizontal: theme.spacing.l,
	},
	title: {
		fontSize: theme.fontSizes.l,
		marginBottom: theme.spacing.xl,
		textAlign: 'center',
		color: theme.colors.gray[900],
	},

	swapButton: {
		marginTop: theme.spacing.l,
		width: '100%',
	},
});
