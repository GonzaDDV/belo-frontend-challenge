import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Text, ScreenMainView, RoundedButton, Button } from 'src/components/lib';
import { theme } from 'src/constants/theme';
import { SwapStackParamList } from 'src/ts/types';
import { SwapButton, SwapInput } from 'src/components/atoms/SwapScreen';
import { useSelector } from 'react-redux';
import { RootState, useTypedDispatch } from 'src/state/store';
import { SelectedCoin, swapFirstAndSecond, updateCoinAmount, updateErrorMessage } from 'src/state/slices/swap';
import { useEffect, useMemo } from 'react';
import { getCoinPriceFromCoinArray, getEquivalentAmountInOtherCoin } from 'src/utils/coins';

type SwapScreenProps = NativeStackScreenProps<SwapStackParamList, 'SwapHome'>;

const SwapScreen = (props: SwapScreenProps) => {
	const { coins, user } = useSelector((state: RootState) => state.coins);
	const { selectedCoins, error } = useSelector((state: RootState) => state.swap);
	const dispatch = useTypedDispatch();

	const navigateToSwapConfirmationScreen = () => {
		if (parseFloat(firstCoin.amount) > maxAmount) {
			return dispatch(updateErrorMessage("You don't have enough amount to swap."));
		}
		if (!parseFloat(firstCoin.amount)) {
			return dispatch(updateErrorMessage('Please, enter an amount.'));
		}
		props.navigation.navigate('SwapConfirmation');
	};

	const [firstCoin, secondCoin]: SelectedCoin[] = selectedCoins;

	const handleSwapButtonPress = () => {
		dispatch(swapFirstAndSecond());
	};

	const maxAmount = useMemo(() => user.coins[firstCoin.key as keyof typeof user.coins].amount, [user, firstCoin.key]);

	const handleMaxButtonPress = () => {
		dispatch(updateCoinAmount({ amount: maxAmount, index: 0 }));
	};

	const handleFirstCoinAmountChange = (amount: string) => {
		dispatch(updateCoinAmount({ amount, index: 0 }));
	};

	useEffect(() => {
		dispatch(
			updateCoinAmount({
				amount: getEquivalentAmountInOtherCoin({
					firstCoinAmount: parseFloat(firstCoin.amount) || 0,
					firstCoinPrice: getCoinPriceFromCoinArray(coins, firstCoin.key),
					secondCoinPrice: getCoinPriceFromCoinArray(coins, secondCoin.key),
				}),
				index: 1,
			})
		);
	}, [firstCoin.amount]);

	return (
		<ScreenMainView style={styles.mainContainer} showBackButton>
			<Text style={styles.title} fontWeight='bold'>
				Swap cryptocurrencies
			</Text>

			<View>
				<SwapInput
					topLabel='Selling'
					token={firstCoin.key}
					placeholder='0'
					maxAmount={maxAmount}
					onMaxAmountPress={handleMaxButtonPress}
					value={firstCoin.amount.toString() || ''}
					onChangeText={handleFirstCoinAmountChange}
				/>
				{error ? <Text style={styles.error}>{error}</Text> : null}
				<SwapButton onPress={handleSwapButtonPress} />
				<SwapInput
					topLabel='Buying'
					token={secondCoin.key}
					placeholder='0'
					editable={false}
					value={secondCoin.amount.toString() || ''}
				/>
				<Button onPress={navigateToSwapConfirmationScreen} text='Swap' size='m' style={styles.button} />
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

	error: {
		color: theme.colors.red[100],
		fontSize: theme.fontSizes.s,
		marginTop: theme.spacing.s,
	},
});
