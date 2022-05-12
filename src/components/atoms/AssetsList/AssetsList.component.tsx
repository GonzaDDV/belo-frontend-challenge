import { FlatList, View } from "react-native";
import { CGCoin, RootStackParamList } from "src/ts/types";

import ListItem from "./ListItem/ListItem.component";
import { RoundedButton, Text } from "src/components/lib";
import { height } from "src/utils/sizing";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from "src/state/slices/coins";
import styles from "./AssetsList.styles";
import { getCoinByName } from "src/utils/coins";

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
  const { navigate } = useNavigation<SwapScreenNavigationProp>();

  const goToSwapScreen = () => {
    navigate("Swap");
  };

  return (
    <View style={styles.assetsContainer}>
      <Text style={styles.assetsLabel} fontWeight="500">
        Your assets
      </Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={props.tokens}
        renderItem={({ item }) => (
          <ListItem
            {...item}
            amount={getCoinByName(props.user.coins, item.name)?.amount || 0}
          />
        )}
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
