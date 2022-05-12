import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { FieldTemplateSettings } from "react-native-custom-picker";
import { Text } from "src/components/lib";
import { defaultStyles } from "src/constants/styles";
import { theme } from "src/constants/theme";
import { scale } from "src/utils/sizing";
import styles from "./CoinPicker.styles";

export default function (props: FieldTemplateSettings) {
  const { selectedItem, defaultText, getLabel } = props;
  return (
    <View style={styles.container}>
      <View style={defaultStyles.row}>
        <MaterialIcons
          name="arrow-drop-down"
          size={scale(32)}
          color={theme.colors.gray[400]}
        />
        {!selectedItem && (
          <Text fontWeight="600" style={styles.placeholderText}>
            {defaultText}
          </Text>
        )}
        {selectedItem && (
          <Text fontWeight="600" style={styles.selectedItemText}>
            {getLabel(selectedItem)}
          </Text>
        )}
      </View>
    </View>
  );
}
