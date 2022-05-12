import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Text, View, TextInput as DefaultTextInput } from "react-native";
import { defaultStyles } from "src/constants/styles";
import styles from "./TextInput.styles";

interface Props {
  rightText?: string;
  bold?: boolean;
}

export type TextInputProps = DefaultTextInput["props"] & Props;

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
      <DefaultTextInput
        {...props}
        style={[styles.textInput, bold && styles.boldText]}
      />
      {rightText && <Text style={styles.rightText}>{rightText}</Text>}
    </View>
  );
};

export default TextInput;
