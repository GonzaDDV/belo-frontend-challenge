import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { defaultStyles } from 'src/constants/styles';
import { scale } from 'src/utils/fonts';
import { theme } from 'src/constants/theme';

interface Props {
	name: string;
	abbreviation: string;
	price: number;
	amount: string;
	amountMoney: string;
	color: string;
}

const AssetsListItem = (props: Props) => {
	const { name, abbreviation, price, amount, amountMoney, color } = props;
	return (
		<View style={styles.assetsListItem}>
			<View style={{ ...styles.tokenLogo, backgroundColor: color }} />
			<View style={styles.tokenLabel}>
				<View style={defaultStyles.row}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.abbreviation}>{abbreviation}</Text>
				</View>
				<Text style={styles.price}>${price}</Text>
			</View>
			<View style={styles.tokenAmountContainer}>
				<Text style={styles.assetValueMoney}>${amountMoney}</Text>
				<Text style={styles.amount}>
					{amount} {abbreviation}
				</Text>
			</View>
		</View>
	);
};

export default AssetsListItem;

const styles = StyleSheet.create({
	assetsListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: theme.spacing.l,
	},

	tokenLogo: {
		width: scale(40),
		height: scale(40),
		backgroundColor: theme.colors.bitcoin,
		borderRadius: theme.borderRadius.circle,
	},
	tokenLabel: {
		marginHorizontal: theme.spacing.m,
	},
	name: {
		fontSize: theme.fontSizes.m,
		color: theme.colors.gray[800],
		fontWeight: 'bold',
	},
	abbreviation: {
		fontSize: theme.fontSizes.xs,
		color: theme.colors.gray[500],
		fontWeight: 'bold',
		marginLeft: theme.spacing.s,
	},
	price: {
		fontSize: theme.fontSizes.xs,
		color: theme.colors.gray[500],
		fontWeight: 'bold',
	},

	tokenValue: {
		fontSize: theme.fontSizes.xs,
		color: theme.colors.gray[500],
		fontWeight: 'bold',
	},

	tokenAmountContainer: {
		marginLeft: 'auto',
		alignItems: 'flex-end',
	},

	assetValueMoney: {
		fontSize: theme.fontSizes.m,
		color: theme.colors.gray[800],
		fontWeight: 'bold',
	},
	amount: {
		fontSize: theme.fontSizes.xs,
		color: theme.colors.gray[500],
		fontWeight: 'bold',
	},
});
