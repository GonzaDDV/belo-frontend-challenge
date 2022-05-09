import { StyleSheet, View } from 'react-native';
import { Button, ScreenMainView, Text } from 'src/components/lib';
import { theme } from 'src/constants/theme';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { width } from 'src/utils/sizing';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/ts/types';

type SwapFailureScreenProps = NativeStackScreenProps<RootStackParamList, 'Swap'>;

const SwapFailureScreen = (props: SwapFailureScreenProps) => {
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
				source={require('src/animations/lottie/failure.json')}
				loop={false}
			/>
			<Text style={styles.title} fontWeight='bold'>
				We are sorry, your transaction failed.
			</Text>
			<Text style={styles.text} fontWeight='400'>
				Contact us so we can provide more information about your transaction
			</Text>
			<Button onPress={goToHomeScreen} text='Volver al inicio' size='m' style={styles.homeButton} />
		</ScreenMainView>
	);
};

export default SwapFailureScreen;

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
