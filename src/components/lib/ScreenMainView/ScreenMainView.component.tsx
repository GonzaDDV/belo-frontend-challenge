import { View } from "react-native";
import { defaultStyles } from "src/constants/styles";
import BackButton from "src/components/lib/Button/BackButton/BackButton.component";

interface Props {
  showBackButton?: boolean;
}

type ScreenProps = View["props"] & Props;

const ScreenMainView = (props: ScreenProps) => {
  const { showBackButton, style, children } = props;
  return (
    <View style={[defaultStyles.mainContainer, style]}>
      {showBackButton && <BackButton />}
      {children}
    </View>
  );
};

export default ScreenMainView;
