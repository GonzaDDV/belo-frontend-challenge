import { StyleSheet } from "react-native";
import { theme } from "src/constants/theme";

export default StyleSheet.create({
  container: {
    padding: theme.spacing.s,
  },

  placeholderText: {
    fontSize: theme.fontSizes.s,
    color: theme.colors.gray[700],
  },

  clearButton: {
    borderRadius: theme.borderRadius.s,
    marginRight: theme.spacing.m,
    padding: theme.spacing.s,
  },

  headerContainer: {
    padding: theme.spacing.m,
    alignItems: "center",
  },
  headerText: {
    fontSize: theme.fontSizes.m,
    color: theme.colors.gray[800],
  },

  optionContainer: {
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.s,
    borderBottomColor: theme.colors.gray[300],
    borderBottomWidth: 1,
    marginHorizontal: theme.spacing.m,
  },
  optionText: {
    fontSize: theme.fontSizes.s,
    color: theme.colors.gray[600],
  },

  selectedItemText: {
    flex: 1,
  },
});
