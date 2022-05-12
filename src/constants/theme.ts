import { scale } from "src/utils/sizing";

export const colors = {
  primary: "#894BF0",
  secondary: "#9C3AEA",

  black: "#0B0B0B",
  white: "#F0F2F3",

  bitcoin: "#F7931A",
  ethereum: "#627EEA",
  usdt: "#53ae94",

  gray: {
    100: "#f7fafc",
    200: "#edf2f7",
    300: "#e2e8f0",
    400: "#cbd5e0",
    500: "#a0aec0",
    600: "#718096",
    700: "#4a5568",
    800: "#2d3748",
    900: "#1a202c",
  },

  green: {
    100: "#44CA49",
    200: "#4E9E51",
  },

  red: {
    100: "#EE163D",
    200: "#CD0E30",
  },
};

const fontSizes = {
  xs: scale(12),
  s: scale(16),
  m: scale(20),
  l: scale(32),
  xl: scale(40),
};

export const theme = {
  colors: {
    background: colors.primary,
    foreground: colors.white,
    primary: colors.primary,
    gray: colors.gray,
    green: colors.green,
    red: colors.red,
    white: colors.white,

    bitcoin: colors.bitcoin,
    ethereum: colors.ethereum,
    usdt: colors.usdt,
  },
  fontSizes,
  spacing: {
    xs: scale(4),
    s: scale(8),
    m: scale(18),
    l: scale(24),
    xl: scale(40),
    xxl: scale(64),
  },
  textVariants: {
    header: {
      fontSize: fontSizes.xl,
      color: colors.gray[900],
    },
    body: {
      fontFamily: "Inter",
      fontSize: 16,
    },
  },
  borderRadius: {
    s: scale(4),
    m: scale(8),
    l: scale(16),
    xl: scale(32),
    circle: scale(5000),
  },
};
