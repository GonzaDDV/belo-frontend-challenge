import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";

export default StyleSheet.create({
  mainView: {
    backgroundColor: theme.colors.background,
  },
  moneyContainer: {
    borderRadius: theme.borderRadius.l,
    backgroundColor: theme.colors.foreground,
    padding: theme.spacing.l,
    marginHorizontal: theme.spacing.xl,
  },
  balanceLabel: {
    fontSize: theme.fontSizes.s,
    color: theme.colors.gray[800],
  },
  moneyTextsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: theme.spacing.s,
  },
  currentMoneyText: {
    ...theme.textVariants.header,
    flex: 1,
  },
  secondaryLabel: {
    fontSize: theme.fontSizes.s,
    color: theme.colors.gray[500],
    marginLeft: theme.spacing.m,
  },
  gainsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  gainsText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xs,
    borderTopLeftRadius: theme.borderRadius.m,
    borderBottomLeftRadius: theme.borderRadius.m,
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xs,
  },

  gainsPercentage: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xs,
    borderTopRightRadius: theme.borderRadius.m,
    borderBottomRightRadius: theme.borderRadius.m,
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xs,
  },

  gainsTextGreen: { backgroundColor: theme.colors.green[100] },
  gainsTextRed: { backgroundColor: theme.colors.red[100] },
  gainsPercentageGreen: { backgroundColor: theme.colors.green[200] },
  gainsPercentageRed: { backgroundColor: theme.colors.red[200] },
});
