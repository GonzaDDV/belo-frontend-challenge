import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const defaultStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    paddingTop: theme.spacing.xxl,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
