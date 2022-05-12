import { View } from "react-native";
import React from "react";
import { CustomPicker } from "react-native-custom-picker";
import { SelectedCoin } from "src/state/slices/swap";
import styles from "./CoinPicker.styles";

import FieldComponent from "./Field.component";
import OptionComponent from "./Option.component";
import HeaderComponent from "./Header.component";

interface Props {
  coins: SelectedCoin[];
  value: SelectedCoin;
  changeValue: (value: SelectedCoin) => void;
}

const CoinPicker = (props: Props) => {
  const { coins, changeValue } = props;

  return (
    <CustomPicker
      placeholder="Select a coin"
      options={coins}
      getLabel={(item: SelectedCoin) => item.key}
      fieldTemplate={FieldComponent}
      optionTemplate={OptionComponent}
      headerTemplate={HeaderComponent}
      footerTemplate={() => <View style={styles.headerContainer} />}
      onValueChange={changeValue}
      {...props}
    />
  );
};

export default CoinPicker;
