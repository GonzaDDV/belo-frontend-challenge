import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";

export default StyleSheet.create({
  mainContainer: {
    paddingTop: theme.spacing.xxl + theme.spacing.l,
    paddingHorizontal: theme.spacing.l,
  },

  subtitleContainer: {
    borderBottomColor: theme.colors.gray[300],
    borderBottomWidth: 2,
    marginTop: theme.spacing.l,
  },

  subtitle: {
    fontSize: theme.fontSizes.m,
    color: theme.colors.gray[500],
    marginBottom: theme.spacing.xs,
  },

  checkboxContainer: {
    marginVertical: theme.spacing.l,
  },

  checkboxText: {
    fontSize: theme.fontSizes.s,
    color: theme.colors.gray[800],
    marginLeft: theme.spacing.s,
  },
});
