import { StyleSheet, View } from 'react-native';
import React from 'react';
import { defaultStyles } from 'src/constants/styles';
import { scale } from 'src/utils/fonts';
import { theme } from 'src/constants/theme';
import { Text } from 'src/components/lib';

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
					<Text fontWeight='600' style={styles.name}>
						{name}
					</Text>
					<Text style={styles.abbreviation}>{abbreviation}</Text>
				</View>
				<Text style={styles.price}>${price}</Text>
			</View>
			<View style={styles.tokenAmountContainer}>
				<Text fontWeight='600' style={styles.assetValueMoney}>
					${amountMoney}
				</Text>
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
	},
	abbreviation: {
		fontSize: theme.fontSizes.xs,
		color: theme.colors.gray[500],
		marginLeft: theme.spacing.s,
	},
	price: {
		fontSize: theme.fontSizes.xs,
		color: theme.colors.gray[500],
	},

	tokenValue: {
		fontSize: theme.fontSizes.xs,
		color: theme.colors.gray[500],
	},

	tokenAmountContainer: {
		marginLeft: 'auto',
		alignItems: 'flex-end',
	},

	assetValueMoney: {
		fontSize: theme.fontSizes.s,
		color: theme.colors.gray[800],
	},
	amount: {
		fontSize: theme.fontSizes.xs,
		color: theme.colors.gray[500],
	},
});
