import { Text as DefaultText } from "react-native";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

interface CustomProps {
  fontWeight?:
    | "bold"
    | "normal"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}

type TextProps = DefaultText["props"] & CustomProps;

const fontWeightMap = {
  bold: "Inter_700Bold",
  normal: "Inter_400Regular",
  100: "Inter_100Thin",
  200: "Inter_200ExtraLight",
  300: "Inter_300Light",
  400: "Inter_400Regular",
  500: "Inter_500Medium",
  600: "Inter_600SemiBold",
  700: "Inter_700Bold",
  800: "Inter_800ExtraBold",
  900: "Inter_900Black",
};

const Text = (props: TextProps) => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) return null;

  return (
    <DefaultText
      {...props}
      style={[
        props.style,
        {
          fontFamily: props.fontWeight
            ? fontWeightMap[props.fontWeight]
            : fontWeightMap.normal,
        },
      ]}
    >
      {props.children}
    </DefaultText>
  );
};

export default Text;
