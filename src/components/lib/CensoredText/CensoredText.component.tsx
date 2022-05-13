import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { showCensoredMoney } from "src/utils/coins";
import Text, { CustomTextProps } from "../Text/Text.component";

interface Props {
  length: number;
  showDollarSign?: boolean;
  text: string;
}

type CensoredTextProps = CustomTextProps & Props;

const CensoredText = (props: CensoredTextProps) => {
  const { length, showDollarSign, text } = props;
  const { showMoney } = useSelector((state: RootState) => state.settings);

  return (
    <Text {...props}>
      {showCensoredMoney(text, showMoney, length, showDollarSign)}
    </Text>
  );
};

export default CensoredText;
