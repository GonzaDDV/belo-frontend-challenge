import { FlatList, StyleSheet, View } from 'react-native';
import { theme } from 'src/constants/theme';
import { CGCoin, RootStackParamList, Token } from 'src/ts/types';

import AssetsListItem from './AssetsListItem';
import { RoundedButton, Text } from 'src/components/lib';
import { height } from 'src/utils/sizing';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { user } from 'src/fake-db/user';
import { User } from 'src/state/slices/coins';

interface Props {
	tokens: Array<CGCoin>;
	user: User;
	loading: boolean;
}

const keyExtractor = (item: CGCoin, index: number) => item.name + index;

type SwapScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Swap'>;

const AssetsList = (props: Props) => {
	const { navigate } = useNavigation<SwapScreenNavigationProp>();

	const goToSwapScreen = () => {
		navigate('Swap');
	};

	return (
		<View style={styles.assetsContainer}>
			<Text style={styles.assetsLabel} fontWeight='500'>
				Your assets
			</Text>
			<FlatList
				keyExtractor={keyExtractor}
				data={props.tokens}
				renderItem={({ item }) => (
					<AssetsListItem {...item} amount={props.user.coins[item.name as keyof typeof user.coins].amount} />
				)}
				style={{ maxHeight: height * 0.45 }}
			/>

			<RoundedButton size='l' onPress={goToSwapScreen} icon='compare-arrows' style={styles.swapButton} />
		</View>
	);
};

export default AssetsList;

const styles = StyleSheet.create({
	assetsContainer: {
		borderTopLeftRadius: theme.borderRadius.xl,
		borderTopRightRadius: theme.borderRadius.xl,
		backgroundColor: theme.colors.foreground,
		paddingVertical: theme.spacing.xl,
		paddingHorizontal: theme.spacing.xl,
		marginTop: theme.spacing.l * 2,
		flexGrow: 1,
		width: '100%',
	},
	assetsLabel: {
		fontSize: theme.fontSizes.m,
		color: theme.colors.gray[600],
		marginBottom: theme.spacing.m,
	},

	swapButton: {
		marginTop: 'auto',
	},
});
