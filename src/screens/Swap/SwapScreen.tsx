import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Text, ScreenMainView, RoundedButton, Button } from 'src/components/lib';
import { theme } from 'src/constants/theme';
import { SwapStackParamList } from 'src/ts/types';
import { SwapButton, SwapInput } from 'src/components/atoms/SwapScreen';
import { useSelector } from 'react-redux';
import { RootState, useTypedDispatch } from 'src/state/store';
import { SelectedCoin, swapFirstAndSecond, updateCoinAmount } from 'src/state/slices/swap';
import { useMemo } from 'react';

type SwapScreenProps = NativeStackScreenProps<SwapStackParamList, 'SwapHome'>;

const SwapScreen = (props: SwapScreenProps) => {
	const { user } = useSelector((state: RootState) => state.coins);
	const { selectedCoins } = useSelector((state: RootState) => state.swap);
	const dispatch = useTypedDispatch();
	const { navigation } = props;

	const navigateToSwapSuccessScreen = () => {
		navigation.navigate('SwapConfirmation');
	};

	const [firstCoin, secondCoin]: SelectedCoin[] = selectedCoins;

	const handleSwapButtonPress = () => {
		dispatch(swapFirstAndSecond());
	};

	const maxAmount = useMemo(() => user.coins[firstCoin.key as keyof typeof user.coins].amount, [user, firstCoin.key]);

	const handleMaxButtonPress = () => {
		dispatch(updateCoinAmount({ amount: maxAmount, index: 0 }));
	};

	return (
		<ScreenMainView style={styles.mainContainer} showBackButton>
			<Text style={styles.title} fontWeight='bold'>
				Swap cryptocurrencies
			</Text>

			<View>
				<SwapInput
					topLabel='Selling'
					token={firstCoin.key}
					placeholder={`0 ${firstCoin.key}`}
					maxAmount={maxAmount}
					onMaxAmountPress={handleMaxButtonPress}
					value={firstCoin.amount.toString() || ''}
					onChangeText={text => {
						dispatch(updateCoinAmount({ amount: text, index: 0 }));
					}}
				/>
				<SwapButton onPress={handleSwapButtonPress} />
				<SwapInput
					topLabel='Buying'
					token={secondCoin.key}
					placeholder={`0 ${secondCoin.key}`}
					value={secondCoin.amount.toString() || ''}
					onChangeText={text => {
						dispatch(updateCoinAmount({ amount: text, index: 1 }));
					}}
				/>
				<Button onPress={navigateToSwapSuccessScreen} text='Swap' size='m' style={styles.button} />
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

	button: {
		marginTop: theme.spacing.l,
		width: '100%',
	},
});
