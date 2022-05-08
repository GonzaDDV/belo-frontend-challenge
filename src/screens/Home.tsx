import { StyleSheet, Text, View } from 'react-native';
import { theme } from 'src/constants/theme';
import { AssetsList } from 'src/components/atoms';
import { tokens } from 'src/fake-db/tokens';
import { defaultStyles } from 'src/constants/styles';
import ActionButton from 'react-native-action-button';

const Home = () => {
	return (
		<View style={[defaultStyles.mainContainer, styles.mainView]}>
			<View style={styles.moneyContainer}>
				<Text style={styles.balanceLabel}>Total balance</Text>
				<View style={styles.moneyTextsContainer}>
					<Text style={styles.currentMoneyText}>$3.230,00</Text>
					<Text style={styles.secondaryLabel}>USD</Text>
				</View>
				<View style={styles.gainsContainer}>
					<Text style={styles.gainsText}>+$100,00</Text>
					<Text style={styles.gainsPercentage}>3%</Text>
				</View>
			</View>

			<AssetsList tokens={tokens} />

			<ActionButton buttonColor={theme.colors.primary}>
				<Text>H</Text>
			</ActionButton>
		</View>
	);
};

export default Home;

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
		fontWeight: '500',
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
		fontWeight: 'bold',
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
		fontWeight: 'bold',
	},
	gainsPercentage: {
		color: theme.colors.white,
		fontSize: theme.fontSizes.xs,
		backgroundColor: theme.colors.green[200],
		borderTopRightRadius: theme.borderRadius.m,
		borderBottomRightRadius: theme.borderRadius.m,
		paddingHorizontal: theme.spacing.s,
		paddingVertical: theme.spacing.xs,
		fontWeight: 'bold',
	},
});
