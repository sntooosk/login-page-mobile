import { StyleSheet, Platform } from "react-native";

const isAndroid = Platform.OS === "android";
const textFontSize = isAndroid ? 30 : 25;
const borderBottomRadius = isAndroid ? 40 : 30;

export const styles = StyleSheet.create({
  contain: {
    marginTop: isAndroid ? -10 : 25,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: isAndroid ? 0 : 15,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: borderBottomRadius,
    borderBottomRightRadius: borderBottomRadius,
  },
  text: {
    fontSize: textFontSize,
    fontWeight: "bold",
    paddingBottom: isAndroid ? 10 : 5,
  },
});
