import { View, TouchableWithoutFeedback, Alert } from "react-native";
import { defaultStyles } from "src/constants/styles";
import { Text, TextInput } from "src/components/lib";
import { TextInputProps } from "src/components/lib/TextInput/TextInput.component";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { cgCoinToSwapStateCoin } from "src/utils/coins";
import { SelectedCoin } from "src/state/slices/swap";
import styles from "./SwapInput.styles";
import CoinPicker from "../CoinPicker/CoinPicker.component";

interface Props {
  topLabel: string;
  maxAmount?: number;
  onMaxAmountPress?: () => void;
  handleCoinChange: (coin: SelectedCoin) => void;
  stateValue: SelectedCoin;
}

type SwapInputProps = TextInputProps & Props;

const SwapInput = (props: SwapInputProps) => {
  const { coins } = useSelector((state: RootState) => state.coins);
  const {
    topLabel,
    maxAmount,
    stateValue,
    onMaxAmountPress,
    handleCoinChange,
  } = props;

  return (
    <View>
      <View style={[defaultStyles.row, styles.labelContainer]}>
        <Text style={styles.label} fontWeight="500">
          {topLabel}
        </Text>
        {maxAmount !== (null || undefined) && (
          <TouchableWithoutFeedback onPress={onMaxAmountPress}>
            <View style={styles.maxButton}>
              <Text style={styles.maxButtonText} fontWeight="600">
                MAX {maxAmount}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>

      <CoinPicker
        coins={cgCoinToSwapStateCoin(coins)}
        changeValue={handleCoinChange}
        value={stateValue}
      />
      <TextInput keyboardType="numeric" {...props} />
    </View>
  );
};

export default SwapInput;
