import { TouchableWithoutFeedback, View } from "react-native";
import { AssetsList } from "src/components/atoms";
import { defaultStyles } from "src/constants/styles";
import styles from "./Home.styles";

import { Text, ScreenMainView } from "src/components/lib";
import { useCoinGecko } from "src/hooks/useCoinGecko";
import { toggleShowMoney } from "src/state/slices/settings";
import { RootState, useTypedDispatch } from "src/state/store";
import { useSelector } from "react-redux";
import CensoredText from "src/components/lib/CensoredText/CensoredText.component";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "src/constants/theme";

const HomeScreen = () => {
  const { showMoney } = useSelector((state: RootState) => state.settings);
  const { coins, loading, user } = useCoinGecko();
  const dispatch = useTypedDispatch();

  const isPriceChange = user.totalPriceChange24hs && user.totalPriceChange24hs;
  const gainIsPositive = user?.totalPriceChange24hs > 0;

  const toggleMoney = () => {
    dispatch(toggleShowMoney());
  };

  return (
    <ScreenMainView style={[defaultStyles.mainContainer, styles.mainView]}>
      <View style={styles.moneyContainer}>
        <Text style={styles.balanceLabel} fontWeight="500">
          Total balance
        </Text>
        <View style={styles.moneyTextsContainer}>
          <CensoredText
            text={"$" + user?.totalValue.toFixed(2)}
            length={6}
            showDollarSign={false}
            style={styles.currentMoneyText}
            fontWeight="800"
            numberOfLines={1}
          />
          <TouchableWithoutFeedback onPress={toggleMoney}>
            <MaterialIcons
              name={showMoney ? "remove-red-eye" : "visibility-off"}
              size={24}
              color={theme.colors.gray[500]}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.secondaryLabel} fontWeight="bold">
            USD
          </Text>
        </View>
        {isPriceChange ? (
          <View style={styles.gainsContainer}>
            <CensoredText
              text={`${
                gainIsPositive && "+"
              }$${user?.totalPriceChange24hs.toFixed(2)}`}
              length={4}
              showDollarSign={false}
              style={[
                styles.gainsText,
                gainIsPositive ? styles.gainsTextGreen : styles.gainsTextRed,
              ]}
              fontWeight="600"
            />

            <CensoredText
              text={user?.totalPriceChangePercentage24hs?.toFixed(2) + "%"}
              length={3}
              showDollarSign={false}
              style={[
                styles.gainsPercentage,
                gainIsPositive
                  ? styles.gainsPercentageGreen
                  : styles.gainsPercentageRed,
              ]}
              fontWeight="600"
            />
          </View>
        ) : null}
      </View>

      <AssetsList tokens={coins} loading={loading} user={user} />
    </ScreenMainView>
  );
};

export default HomeScreen;
