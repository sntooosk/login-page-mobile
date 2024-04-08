import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/types";
import { themes } from "../../utils/theme";

interface SignInFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  handleLogin: () => void;
  loading: boolean;
}

export default function SignInForm({
  email,
  setEmail,
  password,
  setPassword,
  isPasswordVisible,
  togglePasswordVisibility,
  handleLogin,
  loading,
}: SignInFormProps) {
  const { navigate } = useNavigation<propsStack>();

  return (
    <Animatable.View
      animation="fadeInUp"
      style={[
        styles.containerForm,
        { backgroundColor: themes.light.COLORS.BACKGROUND },
      ]}
    >
      <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
        E-mail
      </Text>
      <TextInput
        placeholder={"Digite seu e-mail"}
        placeholderTextColor={themes.light.COLORS.TEXT}
        style={[styles.input, { color: themes.light.COLORS.CARD_CONTENT }]}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
        Senha:
      </Text>
      <TextInput
        placeholder={"Digite sua senha"}
        placeholderTextColor={themes.light.COLORS.TEXT}
        style={[styles.input, { color: themes.light.COLORS.CARD_CONTENT }]}
        value={password}
        secureTextEntry={!isPasswordVisible}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={styles.togglePasswordButton}
      >
        <Text
          style={[
            styles.togglePasswordButtonText,
            { color: themes.light.COLORS.TEXT },
          ]}
        >
          {isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: themes.light.COLORS.BUTTON }]}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={themes.light.COLORS.WHITE} />
        ) : (
          <Text
            style={[
              styles.buttonText,
              { color: themes.light.COLORS.BUTTON_TEXT },
            ]}
          >
            Acessar
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRegister}>
        <Text
          style={[styles.registerText, { color: themes.light.COLORS.TEXT }]}
          onPress={() => navigate("Cadastrar")}
        >
          Não possui cadastro
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}
