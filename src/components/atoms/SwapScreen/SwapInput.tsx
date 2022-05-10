import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { defaultStyles } from 'src/constants/styles';
import { Text, TextInput } from 'src/components/lib';
import { theme } from 'src/constants/theme';
import { scale } from 'src/utils/sizing';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInputProps } from 'src/components/lib/TextInput';

interface Props {
	topLabel: string;
	maxAmount?: number;
	onMaxAmountPress?: () => void;
	token: string;
}

type SwapInputProps = TextInputProps & Props;

const SwapInput = (props: SwapInputProps) => {
	const { topLabel, maxAmount, token, onMaxAmountPress } = props;

	return (
		<View>
			<View style={[defaultStyles.row, styles.labelContainer]}>
				<Text style={styles.label} fontWeight='500'>
					{topLabel}
				</Text>
				{maxAmount && (
					<TouchableWithoutFeedback onPress={onMaxAmountPress}>
						<View style={styles.maxButton}>
							<Text style={styles.maxButtonText} fontWeight='600'>
								MAX {maxAmount}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				)}
			</View>
			<View style={[defaultStyles.row]}>
				<Text fontWeight='600'>{token}</Text>
				<MaterialIcons name='arrow-drop-down' size={scale(40)} color={theme.colors.gray[400]} />
			</View>

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
