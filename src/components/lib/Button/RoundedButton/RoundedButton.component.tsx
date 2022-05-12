import { Animated, StyleProp, TouchableOpacity } from "react-native";
import { theme } from "src/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "./RoundedButton.styles";
import { buttonSizeToStyle } from "src/utils/sizing";

interface CustomProps {
  size: "s" | "m" | "l";
  icon?: keyof typeof MaterialIcons.glyphMap;
  isSecondary?: boolean;
  animationStyle?: StyleProp<any>;
}

type ButtonProps = TouchableOpacity["props"] & CustomProps;

const RoundedButton = (props: ButtonProps) => {
  const { size, icon, isSecondary, style, animationStyle } = props;

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
      {animationStyle ? (
        <Animated.View style={animationStyle}>
          <MaterialIcons
            name={icon}
            size={buttonSizeToStyle[size].icon || 32}
            color={isSecondary ? theme.colors.primary : "#fff"}
          />
        </Animated.View>
      ) : (
        <MaterialIcons
          name={icon}
          size={buttonSizeToStyle[size].icon || 32}
          color={isSecondary ? theme.colors.primary : "#fff"}
        />
      )}
    </TouchableOpacity>
  );
};

export default RoundedButton;
