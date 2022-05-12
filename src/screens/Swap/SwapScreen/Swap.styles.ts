import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";

export default StyleSheet.create({
  mainContainer: {
    paddingTop: theme.spacing.xxl + theme.spacing.l,
    paddingHorizontal: theme.spacing.l,
  },
  title: {
    fontSize: theme.fontSizes.l,
    marginBottom: theme.spacing.xl,
    textAlign: "center",
    color: theme.colors.gray[900],
  },

  button: {
    marginTop: theme.spacing.l,
    width: "100%",
  },

  error: {
    color: theme.colors.red[100],
    fontSize: theme.fontSizes.s,
    marginTop: theme.spacing.s,
  },
});
