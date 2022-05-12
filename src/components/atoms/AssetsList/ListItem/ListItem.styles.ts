import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";
import { scale } from "src/utils/sizing";

export default StyleSheet.create({
  assetsListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.l,
  },

  tokenLogo: {
    width: scale(40),
    height: scale(40),
    borderRadius: theme.borderRadius.circle,
  },
  tokenLabel: {
    marginHorizontal: theme.spacing.m,
  },
  name: {
    fontSize: theme.fontSizes.m,
    color: theme.colors.gray[800],
  },
  abbreviation: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray[500],
    marginLeft: theme.spacing.s,
  },
  price: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray[500],
  },

  tokenValue: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray[500],
  },

  tokenAmountContainer: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },

  assetValueMoney: {
    fontSize: theme.fontSizes.s,
    color: theme.colors.gray[800],
  },
  amount: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray[500],
  },
});
