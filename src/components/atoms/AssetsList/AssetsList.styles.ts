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
    flex: 1,
    width: "100%",
  },
  assetsLabel: {
    fontSize: theme.fontSizes.m,
    color: theme.colors.gray[600],
  },

  swapButton: {
    marginTop: "auto",
  },

  yourAssets: {
    justifyContent: "space-between",
    marginBottom: theme.spacing.l,
  },
});
