import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
      <Image
        source={require("../../assets/svg/main-illustration.svg")}
        style={{ width: "50%" }}
        resizeMode="contain"
      />

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={[
          styles.containerForm,
          { backgroundColor: themes.light.COLORS.BACKGROUND },
        ]}
      >
        <Text style={[styles.title, { color: themes.light.COLORS.TITLE }]}>
          You should MoveIt!
        </Text>
        <Text style={[styles.text, { color: themes.light.COLORS.TITLE }]}>
          Log in to your account
        </Text>

        <TouchableOpacity
          style={[
            styles.buttonAcessar,
            { backgroundColor: themes.light.COLORS.BUTTON },
          ]}
          onPress={() => navigate("Log")}
        >
          <Text
            style={[
              styles.buttonText,
              { color: themes.light.COLORS.BUTTON_TEXT },
            ]}
          >
            Access
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
export default Home;
