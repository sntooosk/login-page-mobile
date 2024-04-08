import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { themes } from "../../utils/theme";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={[styles.container, { backgroundColor: themes.light.COLORS.PRIMARY }]}>
      <View style={styles.contain}>
        <Text style={[styles.text, { color: themes.light.COLORS.WHITE }]}>{title}</Text>
      </View>
    </View>
  );
}
