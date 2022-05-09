import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { StyleSheet, Text, View, TextInput as DefaultTextInput } from 'react-native';
import { defaultStyles } from 'src/constants/styles';
import { theme } from 'src/constants/theme';

interface Props {
	rightText?: string;
	bold?: boolean;
}

type TextInputProps = DefaultTextInput['props'] & Props;

const TextInput = (props: TextInputProps) => {
	const { rightText, bold } = props;

	let [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
	});

	if (!fontsLoaded) return null;

	return (
		<View style={[defaultStyles.row, styles.textInputContainer]}>
			<DefaultTextInput {...props} style={[styles.textInput, bold && styles.boldText]} />
			{rightText && <Text style={styles.rightText}>{rightText}</Text>}
		</View>
	);
};

export default TextInput;

const styles = StyleSheet.create({
	textInputContainer: {
		backgroundColor: theme.colors.gray[300],
		paddingVertical: theme.spacing.s,
		paddingHorizontal: theme.spacing.m,
	},
	textInput: {
		flex: 1,
		fontFamily: 'Inter_600SemiBold',
	},
	boldText: {
		fontFamily: 'Inter_700Bold',
	},

	rightText: {
		fontFamily: 'Inter_600SemiBold',
		color: theme.colors.gray[500],
	},
});
