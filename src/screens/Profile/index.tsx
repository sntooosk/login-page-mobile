import React from "react";
import { View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { themes } from "../../utils/styles/colors";
import Header from "../components/Header";
import { asyncRemoveUser } from "../../utils/storage/AuthStorage";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { setAuthData } = useAuth();

  const handleSignOut = async () => {
    Alert.alert(
      "Confirmação",
      "Deseja sair?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: async () => {
            setAuthData(undefined);
            await asyncRemoveUser();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View
      style={[styles.container, { backgroundColor: themes.COLORS.PRIMARY }]}
    >
      <View>
        <Header title="Perfil" />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: themes.COLORS.PRIMARY }]}
      ></TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.userPostsContainer,
            { backgroundColor: themes.COLORS.BACKGROUND },
          ]}
        >
          <View style={styles.botoes}>
            <TouchableOpacity onPress={handleSignOut}>
              <FontAwesome
                name="sign-out"
                size={30}
                color={themes.COLORS.TITLE}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
