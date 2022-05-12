import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";

export default StyleSheet.create({
  labelContainer: {
    marginBottom: theme.spacing.m,
    justifyContent: "space-between",
  },

  label: {
    color: theme.colors.gray[500],
    fontSize: theme.fontSizes.s,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  maxButton: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.xs,
  },

  maxButtonText: {
    color: theme.colors.primary,
  },
});
