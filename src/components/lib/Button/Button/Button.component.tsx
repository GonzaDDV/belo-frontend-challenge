import { TouchableOpacity } from "react-native";
import { theme } from "src/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { buttonSizeToStyle } from "src/utils/sizing";
import Text from "../../Text/Text.component";
import styles from "./Button.styles";

interface CustomProps {
  text: string;
  size: "s" | "m" | "l";
  icon?: keyof typeof MaterialIcons.glyphMap;
  isSecondary?: boolean;
}

type ButtonProps = TouchableOpacity["props"] & CustomProps;

const Button = (props: ButtonProps) => {
  const { size, icon, isSecondary, style, text } = props;

  return (
    <TouchableOpacity
      {...props}
      style={[
        style,
        styles.button,
        isSecondary ? styles.secondaryButton : styles.primaryButton,
        size === "s"
          ? styles.smallButton
          : size === "m"
          ? styles.mediumButton
          : styles.largeButton,
      ]}
    >
      {icon && (
        <MaterialIcons
          name={icon}
          size={buttonSizeToStyle[size].icon || 32}
          color={isSecondary ? theme.colors.primary : "#fff"}
        />
      )}
      <Text
        style={[
          size === "s"
            ? styles.smallButtonText
            : size === "m"
            ? styles.mediumButtonText
            : styles.largeButtonText,
          isSecondary ? styles.secondaryButtonText : styles.primaryButtonText,
        ]}
        fontWeight="bold"
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
