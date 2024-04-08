import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { themes } from "../../utils/theme";

interface SignUpFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confPassword: string;
  setConfPassword: (value: string) => void;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  handleSignUp: () => void;
  loading: boolean;
}

export default function SignUpForm({
  email,
  setEmail,
  password,
  setPassword,
  confPassword,
  setConfPassword,
  isPasswordVisible,
  togglePasswordVisibility,
  handleSignUp,
  loading,
}: SignUpFormProps) {
  return (
    <View
      style={[
        styles.containerForm,
        { backgroundColor: themes.light.COLORS.BACKGROUND },
      ]}
    >
      <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
        E-mail:
      </Text>
      <TextInput
        placeholder={"Digite seu e-mail"}
        placeholderTextColor={themes.light.COLORS.TEXT}
        style={[styles.input, { color: themes.light.COLORS.CARD_CONTENT }]}
        value={email}
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

      <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
        Confirme sua senha
      </Text>
      <TextInput
        placeholder={"Confirme sua senha"}
        placeholderTextColor={themes.light.COLORS.TEXT}
        style={[styles.input, { color: themes.light.COLORS.CARD_CONTENT }]}
        value={confPassword}
        secureTextEntry={!isPasswordVisible}
        onChangeText={(text) => setConfPassword(text)}
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
        onPress={handleSignUp}
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
            Registrar
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
