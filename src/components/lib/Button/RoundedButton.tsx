import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from 'src/constants/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { buttonSizeToStyle } from 'src/utils/sizing';

interface CustomProps {
	size: 's' | 'm' | 'l';
	icon?: keyof typeof MaterialIcons.glyphMap;
	isSecondary?: boolean;
}

type ButtonProps = TouchableOpacity['props'] & CustomProps;

const RoundedButton = (props: ButtonProps) => {
	const { size, icon, isSecondary, style } = props;

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
			<MaterialIcons
				name={icon}
				size={buttonSizeToStyle[size].icon || 32}
				color={isSecondary ? theme.colors.primary : '#fff'}
			/>
		</TouchableOpacity>
	);
};

export default RoundedButton;

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: theme.spacing.xl * 2,
		height: theme.spacing.xl * 2,
		alignSelf: 'center',
		borderRadius: 100,
	},

	smallButton: {
		width: buttonSizeToStyle.s.width,
		height: buttonSizeToStyle.s.height,
	},
	mediumButton: {
		width: buttonSizeToStyle.m.width,
		height: buttonSizeToStyle.m.height,
	},
	largeButton: {
		width: buttonSizeToStyle.l.width,
		height: buttonSizeToStyle.l.height,
	},

	primaryButton: {
		backgroundColor: theme.colors.primary,
	},
	secondaryButton: {
		borderWidth: 3,
		borderColor: theme.colors.primary,
	},
});
