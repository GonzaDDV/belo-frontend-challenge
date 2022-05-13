import { BackButton, ScreenMainView, Text } from "src/components/lib";
import styles from "./Settings.styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { theme } from "src/constants/theme";
import { View } from "react-native";
import { RootState, useTypedDispatch } from "src/state/store";
import { useSelector } from "react-redux";
import { toggleShowNoBalanceCoins } from "src/state/slices/settings";

const SettingsScreen = () => {
  const { showNoBalanceCoins } = useSelector(
    (state: RootState) => state.settings
  );
  const dispatch = useTypedDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleShowNoBalanceCoins());
  };

  return (
    <ScreenMainView style={styles.mainContainer}>
      <BackButton />
      <Text style={theme.textVariants.header} fontWeight="bold">
        Settings
      </Text>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle} fontWeight="500">
          Coins list
        </Text>
      </View>

      <BouncyCheckbox
        size={theme.spacing.l}
        fillColor={theme.colors.primary}
        textComponent={
          <Text style={styles.checkboxText} fontWeight="500">
            Show coins with 0 balance
          </Text>
        }
        style={styles.checkboxContainer}
        unfillColor="#FFFFFF"
        onPress={handleCheckboxChange}
        disableBuiltInState
        isChecked={showNoBalanceCoins}
      />
    </ScreenMainView>
  );
};

export default SettingsScreen;
