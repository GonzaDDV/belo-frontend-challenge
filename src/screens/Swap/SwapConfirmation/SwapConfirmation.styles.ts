import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";

export default StyleSheet.create({
  mainContainer: {
    paddingTop: theme.spacing.xxl + theme.spacing.l,
    paddingHorizontal: theme.spacing.l,
    backgroundColor: theme.colors.white,
  },

  container: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: theme.fontSizes.l,
    textAlign: "center",
    color: theme.colors.gray[800],
  },

  text: {
    fontSize: theme.fontSizes.m,
    textAlign: "center",
    marginTop: theme.spacing.l,
  },

  confirmButton: {
    marginTop: theme.spacing.xl,
  },
});
