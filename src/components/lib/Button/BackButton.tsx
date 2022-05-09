import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from 'src/constants/theme';
import { scale } from 'src/utils/sizing';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type BackButtonProps = TouchableOpacity['props'];

const BackButton = (props: BackButtonProps) => {
	const { goBack } = useNavigation();

	return (
		<TouchableOpacity onPress={() => goBack()} {...props}>
			<MaterialIcons name='close' size={scale(32)} color={theme.colors.gray[700]} style={styles.backButton} />
		</TouchableOpacity>
	);
};

export default BackButton;

const styles = StyleSheet.create({
	backButton: {
		marginBottom: theme.spacing.m,
		marginLeft: 'auto',
	},
});
