import { View, Image } from "react-native";
import { defaultStyles } from "src/constants/styles";
import { Text } from "src/components/lib";
import { CGCoin } from "src/ts/types";
import styles from "./ListItem.styles";
import { showCensoredMoney } from "src/utils/coins";
import CensoredText from "src/components/lib/CensoredText/CensoredText.component";

type Props = {
  amount: number;
};

type AssetListItemProps = CGCoin & Props;

const calculateValue = (amount: number, price: number) => {
  const value = amount * price;
  return value.toFixed(2);
};

const ListItem = (props: AssetListItemProps) => {
  const { name, symbol, current_price, image, amount } = props;

  return (
    <View style={styles.assetsListItem}>
      <Image source={{ uri: image }} style={styles.tokenLogo} />
      <View style={styles.tokenLabel}>
        <View style={defaultStyles.row}>
          <Text fontWeight="600" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.abbreviation}>{symbol}</Text>
        </View>
        <Text style={styles.price}>${current_price}</Text>
      </View>
      <View style={styles.tokenAmountContainer}>
        <CensoredText
          text={calculateValue(amount, current_price)}
          length={5}
          fontWeight="600"
          style={styles.assetValueMoney}
        />
        <CensoredText
          text={amount + " " + symbol}
          length={6}
          style={styles.amount}
          showDollarSign={false}
        />
      </View>
    </View>
  );
};

export default ListItem;
