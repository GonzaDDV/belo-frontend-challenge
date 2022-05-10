import { useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Animated, GestureResponderEvent } from 'react-native';
import { RoundedButton } from 'src/components/lib';
import { theme } from 'src/constants/theme';

type SwapProps = TouchableWithoutFeedback['props'];

const SwapButton = (props: SwapProps) => {
	const spinAnimation = useRef(new Animated.Value(0)).current;

	const spin = spinAnimation.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '180deg'],
	});

	const swapAnimation = (e: GestureResponderEvent) => {
		props.onPress && props.onPress(e);
		spinAnimation.setValue(0);
		Animated.timing(spinAnimation, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	return (
		<RoundedButton
			{...props}
			animationStyle={{ transform: [{ rotate: spin }] }}
			onPress={swapAnimation}
			style={styles.swapButton}
			size='m'
			icon='swap-calls'
			isSecondary
		/>
	);
};

export default SwapButton;

const styles = StyleSheet.create({
	swapButton: {
		marginTop: theme.spacing.l,
		width: '100%',
	},
});
