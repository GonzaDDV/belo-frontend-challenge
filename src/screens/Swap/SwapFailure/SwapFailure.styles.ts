import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";
import { width } from "src/utils/sizing";

export default StyleSheet.create({
  mainContainer: {
    paddingTop: theme.spacing.xxl + theme.spacing.l,
    paddingHorizontal: theme.spacing.l,
    backgroundColor: theme.colors.white,
  },

  animationContainer: {
    width: width * 0.6,
    height: width * 0.6,
    alignSelf: "center",
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

  homeButton: {
    marginTop: theme.spacing.xl,
  },
});
