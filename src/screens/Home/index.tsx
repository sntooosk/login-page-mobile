import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { propsStack } from "../../routes/types";
import { themes } from "../../utils/theme";

function Home() {
  const { navigate } = useNavigation<propsStack>();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themes.light.COLORS.PRIMARY },
      ]}
    >
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={[
          styles.containerForm,
          { backgroundColor: themes.light.COLORS.BACKGROUND },
        ]}
      >
        <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
          Cuide dos seus maus Hábitos
        </Text>

        <TouchableOpacity
          style={[
            styles.buttonAcessar,
            { backgroundColor: themes.light.COLORS.BUTTON },
          ]}
          onPress={() => navigate("Login")}
        >
          <Text
            style={[
              styles.buttonText,
              { color: themes.light.COLORS.BUTTON_TEXT },
            ]}
          >
            Acessar
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
export default Home;
