import { FlatList, TouchableWithoutFeedback, View } from "react-native";
import { CGCoin, RootStackParamList } from "src/ts/types";

import ListItem from "./ListItem/ListItem.component";
import { RoundedButton, Text } from "src/components/lib";
import { height } from "src/utils/sizing";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from "src/state/slices/coins";
import styles from "./AssetsList.styles";
import { getCoinByName } from "src/utils/coins";
import { defaultStyles } from "src/constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "src/constants/theme";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";

interface Props {
  tokens: Array<CGCoin>;
  user: User;
  loading: boolean;
}

const keyExtractor = (item: CGCoin, index: number) => item.name + index;

type SwapScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Swap"
>;

const AssetsList = (props: Props) => {
  const { showNoBalanceCoins } = useSelector(
    (state: RootState) => state.settings
  );
  const { navigate } = useNavigation<SwapScreenNavigationProp>();

  const goToSwapScreen = () => {
    navigate("Swap");
  };

  const goToSettingsScreen = () => {
    navigate("Settings");
  };

  return (
    <View style={styles.assetsContainer}>
      <View style={[defaultStyles.row, styles.yourAssets]}>
        <Text style={styles.assetsLabel} fontWeight="500">
          Your assets
        </Text>
        <TouchableWithoutFeedback onPress={goToSettingsScreen}>
          <MaterialIcons
            name="settings"
            size={24}
            color={theme.colors.gray[600]}
          />
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        data={props.tokens}
        renderItem={({ item }) => {
          const coinAmount =
            getCoinByName(props.user.coins, item.name)?.amount || 0;

          if (!coinAmount && !showNoBalanceCoins) return null;

          return <ListItem {...item} amount={coinAmount} />;
        }}
        style={{ maxHeight: height * 0.45 }}
      />

      <RoundedButton
        size="l"
        onPress={goToSwapScreen}
        icon="compare-arrows"
        style={styles.swapButton}
      />
    </View>
  );
};

export default AssetsList;
