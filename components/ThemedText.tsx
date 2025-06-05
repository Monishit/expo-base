import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { fontfamily } from "../utils/fonts";
import { RFValue } from "@/utils";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color, fontFamily: fontfamily["spaceMono"] },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: RFValue.moderateScale(16),
    lineHeight: RFValue.moderateScale(24),
  },
  defaultSemiBold: {
    fontSize: RFValue.moderateScale(16),
    lineHeight: RFValue.moderateScale(24),
    fontWeight: "600",
  },
  title: {
    fontSize: RFValue.moderateScale(32),
    fontWeight: "bold",
    lineHeight: RFValue.moderateScale(32),
  },
  subtitle: {
    fontSize: RFValue.moderateScale(20),
    fontWeight: "bold",
  },
  link: {
    lineHeight: RFValue.moderateScale(30),
    fontSize: RFValue.moderateScale(16),
    color: "#0a7ea4",
  },
});
