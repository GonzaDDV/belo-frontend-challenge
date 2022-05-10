import { StyleSheet, View } from 'react-native';
import { theme } from 'src/constants/theme';
import { AssetsList } from 'src/components/atoms';
import { defaultStyles } from 'src/constants/styles';

import { Text, ScreenMainView } from 'src/components/lib';
import { useCoinGecko } from 'src/hooks/useCoinGecko';

interface Props {}

const HomeScreen = (props: Props) => {
	const { coins, loading, user } = useCoinGecko();

	const gainIsPositive = user.totalPriceChange24hs > 0;

	return (
		<ScreenMainView style={[defaultStyles.mainContainer, styles.mainView]}>
			<View style={styles.moneyContainer}>
				<Text style={styles.balanceLabel} fontWeight='500'>
					Total balance
				</Text>
				<View style={styles.moneyTextsContainer}>
					<Text style={styles.currentMoneyText} fontWeight='800' numberOfLines={1}>
						${user.totalValue.toFixed(2)}
					</Text>
					<Text style={styles.secondaryLabel} fontWeight='bold'>
						USD
					</Text>
				</View>
				<View style={styles.gainsContainer}>
					<Text
						style={[styles.gainsText, gainIsPositive ? styles.gainsTextGreen : styles.gainsTextRed]}
						fontWeight='600'
					>
						{gainIsPositive && '+'}${user.totalPriceChange24hs.toFixed(2)}
					</Text>
					<Text
						style={[styles.gainsPercentage, gainIsPositive ? styles.gainsPercentageGreen : styles.gainsPercentageRed]}
						fontWeight='600'
					>
						{user.totalPriceChangePercentage24hs.toFixed(2)}%
					</Text>
				</View>
			</View>

			<AssetsList tokens={coins} loading={loading} />
		</ScreenMainView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	mainView: {
		backgroundColor: theme.colors.background,
	},
	moneyContainer: {
		borderRadius: theme.borderRadius.l,
		backgroundColor: theme.colors.foreground,
		padding: theme.spacing.l,
		marginHorizontal: theme.spacing.xl,
	},
	balanceLabel: {
		fontSize: theme.fontSizes.s,
		color: theme.colors.gray[800],
	},
	moneyTextsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: theme.spacing.s,
	},
	currentMoneyText: {
		...theme.textVariants.header,
		flex: 1,
	},
	secondaryLabel: {
		fontSize: theme.fontSizes.s,
		color: theme.colors.gray[500],
		marginLeft: theme.spacing.m,
	},
	gainsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	gainsText: {
		color: theme.colors.white,
		fontSize: theme.fontSizes.xs,
		borderTopLeftRadius: theme.borderRadius.m,
		borderBottomLeftRadius: theme.borderRadius.m,
		paddingHorizontal: theme.spacing.s,
		paddingVertical: theme.spacing.xs,
	},

	gainsPercentage: {
		color: theme.colors.white,
		fontSize: theme.fontSizes.xs,
		borderTopRightRadius: theme.borderRadius.m,
		borderBottomRightRadius: theme.borderRadius.m,
		paddingHorizontal: theme.spacing.s,
		paddingVertical: theme.spacing.xs,
	},

	gainsTextGreen: { backgroundColor: theme.colors.green[100] },
	gainsTextRed: { backgroundColor: theme.colors.red[100] },
	gainsPercentageGreen: { backgroundColor: theme.colors.green[200] },
	gainsPercentageRed: { backgroundColor: theme.colors.red[200] },
});
