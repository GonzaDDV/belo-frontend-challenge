import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { theme } from 'src/constants/theme';
import { AssetsList } from 'src/components/atoms';
import { tokens } from 'src/fake-db/tokens';
import { defaultStyles } from 'src/constants/styles';

import { Text, ScreenMainView } from 'src/components/lib';
import { RootStackParamList } from 'src/ts/types';
import { useCoinGecko } from 'src/hooks/useCoinGecko';

interface Props {}

const HomeScreen = (props: Props) => {
	const { coins, loading } = useCoinGecko();

	return (
		<ScreenMainView style={[defaultStyles.mainContainer, styles.mainView]}>
			<View style={styles.moneyContainer}>
				<Text style={styles.balanceLabel} fontWeight='500'>
					Total balance
				</Text>
				<View style={styles.moneyTextsContainer}>
					<Text style={styles.currentMoneyText} fontWeight='800'>
						$3.230,00
					</Text>
					<Text style={styles.secondaryLabel} fontWeight='bold'>
						USD
					</Text>
				</View>
				<View style={styles.gainsContainer}>
					<Text style={styles.gainsText} fontWeight='600'>
						+$100,00
					</Text>
					<Text style={styles.gainsPercentage} fontWeight='600'>
						3%
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
	},
	secondaryLabel: {
		fontSize: theme.fontSizes.s,
		color: theme.colors.gray[500],
		marginLeft: theme.spacing.s,
	},
	gainsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	gainsText: {
		color: theme.colors.white,
		fontSize: theme.fontSizes.xs,
		backgroundColor: theme.colors.green[100],
		borderTopLeftRadius: theme.borderRadius.m,
		borderBottomLeftRadius: theme.borderRadius.m,
		paddingHorizontal: theme.spacing.s,
		paddingVertical: theme.spacing.xs,
	},
	gainsPercentage: {
		color: theme.colors.white,
		fontSize: theme.fontSizes.xs,
		backgroundColor: theme.colors.green[200],
		borderTopRightRadius: theme.borderRadius.m,
		borderBottomRightRadius: theme.borderRadius.m,
		paddingHorizontal: theme.spacing.s,
		paddingVertical: theme.spacing.xs,
	},
});
