import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CustomPicker, FieldTemplateSettings, OptionTemplateSettings } from 'react-native-custom-picker';
import { theme } from 'src/constants/theme';
import { Text } from 'src/components/lib';
import { defaultStyles } from 'src/constants/styles';
import { SelectedCoin } from 'src/state/slices/swap';
import { CGCoin } from 'src/ts/types';
import { MaterialIcons } from '@expo/vector-icons';
import { scale } from 'src/utils/sizing';

interface Props {
	coins: SelectedCoin[];
	value: SelectedCoin;
	changeValue: (value: SelectedCoin) => void;
}

const HeaderComponent = () => (
	<View style={styles.headerContainer}>
		<Text fontWeight='bold' style={styles.headerText}>
			Select a coin
		</Text>
	</View>
);

const OptionComponent = (props: OptionTemplateSettings) => {
	const { item, getLabel } = props;

	return (
		<View style={styles.optionContainer}>
			<View style={defaultStyles.row}>
				<Text style={styles.optionText}>{getLabel(item)}</Text>
			</View>
		</View>
	);
};

const FieldComponent = (props: FieldTemplateSettings) => {
	const { selectedItem, defaultText, getLabel } = props;
	return (
		<View style={styles.container}>
			<View style={defaultStyles.row}>
				<MaterialIcons name='arrow-drop-down' size={scale(32)} color={theme.colors.gray[400]} />
				{!selectedItem && (
					<Text fontWeight='600' style={styles.placeholderText}>
						{defaultText}
					</Text>
				)}
				{selectedItem && (
					<Text fontWeight='600' style={styles.selectedItemText}>
						{getLabel(selectedItem)}
					</Text>
				)}
			</View>
		</View>
	);
};

const CoinPicker = (props: Props) => {
	const { coins, changeValue } = props;

	return (
		<CustomPicker
			placeholder='Select a coin'
			options={coins}
			getLabel={(item: SelectedCoin) => item.key}
			fieldTemplate={FieldComponent}
			optionTemplate={OptionComponent}
			headerTemplate={HeaderComponent}
			footerTemplate={() => <View style={styles.headerContainer} />}
			onValueChange={changeValue}
			{...props}
		/>
	);
};

export default CoinPicker;

const styles = StyleSheet.create({
	container: {
		padding: theme.spacing.s,
	},

	placeholderText: {
		fontSize: theme.fontSizes.s,
		color: theme.colors.gray[700],
	},

	clearButton: {
		borderRadius: theme.borderRadius.s,
		marginRight: theme.spacing.m,
		padding: theme.spacing.s,
	},

	headerContainer: {
		padding: theme.spacing.m,
		alignItems: 'center',
	},
	headerText: {
		fontSize: theme.fontSizes.m,
		color: theme.colors.gray[800],
	},

	optionContainer: {
		paddingVertical: theme.spacing.m,
		paddingHorizontal: theme.spacing.s,
		borderBottomColor: theme.colors.gray[300],
		borderBottomWidth: 1,
		marginHorizontal: theme.spacing.m,
	},
	optionText: {
		fontSize: theme.fontSizes.s,
		color: theme.colors.gray[600],
	},

	selectedItemText: {
		flex: 1,
	},
});
