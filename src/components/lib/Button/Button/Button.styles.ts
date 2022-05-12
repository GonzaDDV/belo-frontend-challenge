import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";

export default StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  smallButton: {
    borderRadius: theme.borderRadius.s,
    paddingVertical: theme.spacing.s / 2,
    paddingHorizontal: theme.spacing.s,
  },
  mediumButton: {
    borderRadius: theme.borderRadius.m,
    paddingVertical: theme.spacing.m / 2,
    paddingHorizontal: theme.spacing.m,
  },
  largeButton: {
    borderRadius: theme.borderRadius.l,
    paddingVertical: theme.spacing.l / 2,
    paddingHorizontal: theme.spacing.l,
  },

  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    borderWidth: 3,
    borderColor: theme.colors.primary,
  },

  primaryButtonText: {
    color: "#fff",
  },
  secondaryButtonText: {
    color: theme.colors.primary,
  },

  smallButtonText: {
    fontSize: theme.fontSizes.s,
  },
  mediumButtonText: {
    fontSize: theme.fontSizes.m,
  },
  largeButtonText: {
    fontSize: theme.fontSizes.l,
  },
});
