import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from 'src/constants/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { buttonSizeToStyle } from 'src/utils/sizing';
import Text from '../Text';

interface CustomProps {
	text: string;
	size: 's' | 'm' | 'l';
	icon?: keyof typeof MaterialIcons.glyphMap;
	isSecondary?: boolean;
}

type ButtonProps = TouchableOpacity['props'] & CustomProps;

const Button = (props: ButtonProps) => {
	const { size, icon, isSecondary, style, text } = props;

	return (
		<TouchableOpacity
			{...props}
			style={[
				style,
				styles.button,
				isSecondary ? styles.secondaryButton : styles.primaryButton,
				size === 's' ? styles.smallButton : size === 'm' ? styles.mediumButton : styles.largeButton,
			]}
		>
			{icon && (
				<MaterialIcons
					name={icon}
					size={buttonSizeToStyle[size].icon || 32}
					color={isSecondary ? theme.colors.primary : '#fff'}
				/>
			)}
			<Text
				style={[
					size === 's' ? styles.smallButtonText : size === 'm' ? styles.mediumButtonText : styles.largeButtonText,
					isSecondary ? styles.secondaryButtonText : styles.primaryButtonText,
				]}
				fontWeight='bold'
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},

	smallButton: {
		borderRadius: theme.borderRadius.s,
		paddingVertical: theme.spacing.s / 2,
		paddingHorizontal: theme.spacing.s,
	},
	mediumButton: {
		borderRadius: theme.borderRadius.m,
		paddingVertical: theme.spacing.m / 2,
		paddingHorizontal: theme.spacing.m,
	},
	largeButton: {
		borderRadius: theme.borderRadius.l,
		paddingVertical: theme.spacing.l / 2,
		paddingHorizontal: theme.spacing.l,
	},

	primaryButton: {
		backgroundColor: theme.colors.primary,
	},
	secondaryButton: {
		borderWidth: 3,
		borderColor: theme.colors.primary,
	},

	primaryButtonText: {
		color: '#fff',
	},
	secondaryButtonText: {
		color: theme.colors.primary,
	},

	smallButtonText: {
		fontSize: theme.fontSizes.s,
	},
	mediumButtonText: {
		fontSize: theme.fontSizes.m,
	},
	largeButtonText: {
		fontSize: theme.fontSizes.l,
	},
});
