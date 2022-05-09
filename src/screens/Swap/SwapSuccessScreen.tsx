import { StyleSheet, View } from 'react-native';
import { Button, ScreenMainView, Text } from 'src/components/lib';
import { theme } from 'src/constants/theme';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { width } from 'src/utils/sizing';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/ts/types';

type SwapSuccessScreenProps = NativeStackScreenProps<RootStackParamList, 'Swap'>;

const SwapSuccessScreen = (props: SwapSuccessScreenProps) => {
	const { navigation } = props;
	const animation = useRef(null);

	const goToHomeScreen = () => {
		navigation.navigate('Home');
	};

	return (
		<ScreenMainView style={styles.mainContainer}>
			<LottieView
				autoPlay
				ref={animation}
				style={styles.animationContainer}
				source={require('src/animations/lottie/success.json')}
				loop={false}
			/>
			<Text style={styles.title} fontWeight='bold'>
				Your transaction was completed!
			</Text>
			<Text style={styles.text} fontWeight='400'>
				You succesfully swapped 0.03 ETH for 120 USDT
			</Text>
			<Button onPress={goToHomeScreen} text='Volver al inicio' size='m' style={styles.homeButton} />
		</ScreenMainView>
	);
};

export default SwapSuccessScreen;

const styles = StyleSheet.create({
	mainContainer: {
		paddingTop: theme.spacing.xxl + theme.spacing.l,
		paddingHorizontal: theme.spacing.l,
		backgroundColor: theme.colors.white,
	},

	animationContainer: {
		width: width * 0.6,
		height: width * 0.6,
		alignSelf: 'center',
	},

	title: {
		fontSize: theme.fontSizes.l,
		textAlign: 'center',
		color: theme.colors.gray[800],
	},

	text: {
		fontSize: theme.fontSizes.m,
		textAlign: 'center',
		marginTop: theme.spacing.l,
	},

	homeButton: {
		marginTop: theme.spacing.xl,
	},
});
