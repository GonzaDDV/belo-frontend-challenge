import { StyleSheet, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { defaultStyles } from 'src/constants/styles';
import { Text, TextInput } from 'src/components/lib';
import { theme } from 'src/constants/theme';
import { TextInputProps } from 'src/components/lib/TextInput';
import { useSelector } from 'react-redux';
import { RootState } from 'src/state/store';
import CoinPicker from './CoinPicker';
import { cgCoinToSwapStateCoin } from 'src/utils/coins';
import { SelectedCoin } from 'src/state/slices/swap';

interface Props {
	topLabel: string;
	maxAmount?: number;
	onMaxAmountPress?: () => void;
	handleCoinChange: (coin: SelectedCoin) => void;
	stateValue: SelectedCoin;
}

type SwapInputProps = TextInputProps & Props;

const SwapInput = (props: SwapInputProps) => {
	const { coins } = useSelector((state: RootState) => state.coins);
	const { topLabel, maxAmount, stateValue, onMaxAmountPress, handleCoinChange } = props;

	return (
		<View>
			<View style={[defaultStyles.row, styles.labelContainer]}>
				<Text style={styles.label} fontWeight='500'>
					{topLabel}
				</Text>
				{maxAmount !== (null || undefined) && (
					<TouchableWithoutFeedback onPress={onMaxAmountPress}>
						<View style={styles.maxButton}>
							<Text style={styles.maxButtonText} fontWeight='600'>
								MAX {maxAmount}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				)}
			</View>

			<CoinPicker coins={cgCoinToSwapStateCoin(coins)} changeValue={handleCoinChange} value={stateValue} />
			<TextInput keyboardType='numeric' {...props} />
		</View>
	);
};

export default SwapInput;

const styles = StyleSheet.create({
	labelContainer: {
		marginBottom: theme.spacing.m,
		justifyContent: 'space-between',
	},

	label: {
		color: theme.colors.gray[500],
		fontSize: theme.fontSizes.s,
		textTransform: 'uppercase',
		letterSpacing: 1,
	},

	maxButton: {
		borderColor: theme.colors.primary,
		borderWidth: 2,
		borderRadius: theme.borderRadius.m,
		padding: theme.spacing.xs,
	},

	maxButtonText: {
		color: theme.colors.primary,
	},
});
