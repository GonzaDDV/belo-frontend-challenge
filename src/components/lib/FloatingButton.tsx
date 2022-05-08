import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Text from './Text';
import { theme } from 'src/constants/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { scale } from 'src/utils/fonts';

interface CustomProps {
	icon?: keyof typeof MaterialIcons.glyphMap;
}

type ButtonProps = TouchableOpacity['props'] & CustomProps;

const RoundedButton = (props: ButtonProps) => {
	return (
		<TouchableOpacity {...props} style={[props.style, styles.button]}>
			<MaterialIcons name={props.icon} size={scale(48)} color='#fff' />
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
		backgroundColor: theme.colors.primary,
		borderRadius: 100,
	},
});
