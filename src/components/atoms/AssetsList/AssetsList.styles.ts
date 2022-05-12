import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";

export default StyleSheet.create({
  assetsContainer: {
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.foreground,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
    marginTop: theme.spacing.l * 2,
    flexGrow: 1,
    width: "100%",
  },
  assetsLabel: {
    fontSize: theme.fontSizes.m,
    color: theme.colors.gray[600],
    marginBottom: theme.spacing.m,
  },

  swapButton: {
    marginTop: "auto",
  },
});
