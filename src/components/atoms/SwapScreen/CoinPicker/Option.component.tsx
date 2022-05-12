import { View } from "react-native";
import { OptionTemplateSettings } from "react-native-custom-picker";
import { Text } from "src/components/lib";
import { defaultStyles } from "src/constants/styles";
import styles from "./CoinPicker.styles";

export default function (props: OptionTemplateSettings) {
  const { item, getLabel } = props;

  return (
    <View style={styles.optionContainer}>
      <View style={defaultStyles.row}>
        <Text style={styles.optionText}>{getLabel(item)}</Text>
      </View>
    </View>
  );
}
