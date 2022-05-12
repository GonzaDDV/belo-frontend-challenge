import { View } from "react-native";
import { AssetsList } from "src/components/atoms";
import { defaultStyles } from "src/constants/styles";
import styles from "./Home.styles";

import { Text, ScreenMainView } from "src/components/lib";
import { useCoinGecko } from "src/hooks/useCoinGecko";

const HomeScreen = () => {
  const { coins, loading, user } = useCoinGecko();

  const isPriceChange = user.totalPriceChange24hs && user.totalPriceChange24hs;
  const gainIsPositive = user?.totalPriceChange24hs > 0;

  return (
    <ScreenMainView style={[defaultStyles.mainContainer, styles.mainView]}>
      <View style={styles.moneyContainer}>
        <Text style={styles.balanceLabel} fontWeight="500">
          Total balance
        </Text>
        <View style={styles.moneyTextsContainer}>
          <Text
            style={styles.currentMoneyText}
            fontWeight="800"
            numberOfLines={1}
          >
            ${user?.totalValue.toFixed(2)}
          </Text>
          <Text style={styles.secondaryLabel} fontWeight="bold">
            USD
          </Text>
        </View>
        {isPriceChange ? (
          <View style={styles.gainsContainer}>
            <Text
              style={[
                styles.gainsText,
                gainIsPositive ? styles.gainsTextGreen : styles.gainsTextRed,
              ]}
              fontWeight="600"
            >
              {gainIsPositive && "+"}${user?.totalPriceChange24hs.toFixed(2)}
            </Text>
            <Text
              style={[
                styles.gainsPercentage,
                gainIsPositive
                  ? styles.gainsPercentageGreen
                  : styles.gainsPercentageRed,
              ]}
              fontWeight="600"
            >
              {user?.totalPriceChangePercentage24hs?.toFixed(2) + "%"}
            </Text>
          </View>
        ) : null}
      </View>

      <AssetsList tokens={coins} loading={loading} user={user} />
    </ScreenMainView>
  );
};

export default HomeScreen;
