import { StyleSheet, View, Image } from 'react-native';
import { defaultStyles } from 'src/constants/styles';
import { scale } from 'src/utils/sizing';
import { theme } from 'src/constants/theme';
import { Text } from 'src/components/lib';
import { CGCoin } from 'src/ts/types';

type Props = {
	amount: number;
};

type AssetListItemProps = CGCoin & Props;

const calculateValue = (amount: number, price: number) => {
	const value = amount * price;
	return value.toFixed(2);
};

const AssetsListItem = (props: AssetListItemProps) => {
	const { name, symbol, current_price, image, amount } = props;
	return (
		<View style={styles.assetsListItem}>
			<Image source={{ uri: image }} style={styles.tokenLogo} />
			<View style={styles.tokenLabel}>
				<View style={defaultStyles.row}>
					<Text fontWeight='600' style={styles.name}>
						{name}
					</Text>
					<Text style={styles.abbreviation}>{symbol}</Text>
				</View>
				<Text style={styles.price}>${current_price}</Text>
			</View>
			<View style={styles.tokenAmountContainer}>
				<Text fontWeight='600' style={styles.assetValueMoney}>
					${calculateValue(amount, current_price)}
				</Text>
				<Text style={styles.amount}>
					{amount} {symbol}
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
