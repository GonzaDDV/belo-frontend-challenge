import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";
import { buttonSizeToStyle } from "src/utils/sizing";

export default StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: theme.spacing.xl * 2,
    height: theme.spacing.xl * 2,
    alignSelf: "center",
    borderRadius: 100,
  },

  smallButton: {
    width: buttonSizeToStyle.s.width,
    height: buttonSizeToStyle.s.height,
  },
  mediumButton: {
    width: buttonSizeToStyle.m.width,
    height: buttonSizeToStyle.m.height,
  },
  largeButton: {
    width: buttonSizeToStyle.l.width,
    height: buttonSizeToStyle.l.height,
  },

  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    borderWidth: 3,
    borderColor: theme.colors.primary,
  },
});
