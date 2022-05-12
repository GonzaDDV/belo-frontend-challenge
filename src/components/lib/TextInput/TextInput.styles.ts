import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";

export default StyleSheet.create({
  textInputContainer: {
    backgroundColor: theme.colors.gray[300],
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
  },
  textInput: {
    flex: 1,
    fontFamily: "Inter_600SemiBold",
  },
  boldText: {
    fontFamily: "Inter_700Bold",
  },

  rightText: {
    fontFamily: "Inter_600SemiBold",
    color: theme.colors.gray[500],
  },
});
