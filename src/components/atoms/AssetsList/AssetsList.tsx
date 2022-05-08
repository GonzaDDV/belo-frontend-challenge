import { StyleSheet, Text, View } from 'react-native';
import { theme } from 'src/constants/theme';
import { Token } from 'src/ts/types';
import AssetsListItem from './AssetsListItem';

interface Props {
	tokens: Array<Token>;
}

const AssetsList = (props: Props) => {
	return (
		<View style={styles.assetsContainer}>
			<Text style={styles.assetsLabel}>Your assets</Text>
			<View>
				{props.tokens.map(token => (
					<AssetsListItem key={token.name} {...token} amount='0.1' amountMoney='200.23' />
				))}
			</View>
		</View>
	);
};

export default AssetsList;

const styles = StyleSheet.create({
	assetsContainer: {
		borderTopLeftRadius: theme.borderRadius.xl,
		borderTopRightRadius: theme.borderRadius.xl,
		backgroundColor: theme.colors.foreground,
		paddingTop: theme.spacing.xl,
		paddingHorizontal: theme.spacing.xl,
		marginTop: theme.spacing.l * 2,
		flexGrow: 1,
		width: '100%',
	},
	assetsLabel: {
		fontSize: theme.fontSizes.m,
		color: theme.colors.gray[600],
		fontWeight: 'bold',
		marginBottom: theme.spacing.m,
	},
});
