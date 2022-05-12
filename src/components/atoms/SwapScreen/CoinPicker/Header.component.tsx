import { View } from "react-native";
import { Text } from "src/components/lib";
import styles from "./CoinPicker.styles";

export default function () {
  return (
    <View style={styles.headerContainer}>
      <Text fontWeight="bold" style={styles.headerText}>
        Select a coin
      </Text>
    </View>
  );
}
