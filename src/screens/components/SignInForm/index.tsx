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
import { themes } from "../../../utils/theme";
import { propsStack } from "../../../routes/types";

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
      <Text style={[styles.title, { color: themes.light.COLORS.TITLE }]}>
        Email Address
      </Text>
      <TextInput
        placeholder={"alex@email.com"}
        placeholderTextColor={themes.light.COLORS.TEXT}
        style={[styles.input, { color: themes.light.COLORS.CONTENT }]}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={[styles.title, { color: themes.light.COLORS.TITLE }]}>
        Password
      </Text>
      <TextInput
        placeholder={"Enter your password"}
        placeholderTextColor={themes.light.COLORS.TEXT}
        style={[styles.input, { color: themes.light.COLORS.CONTENT }]}
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
          {isPasswordVisible ? "Hide password" : "Show password"}{" "}
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
            Login Now
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonRegister,
          {
            backgroundColor: themes.light.COLORS.WHITE,
            borderColor: themes.light.COLORS.BUTTON,
          },
        ]}
      >
        <Text
          style={[styles.buttonText, { color: themes.light.COLORS.BUTTON }]}
          onPress={() => navigate("Home")}
        >
          Signup Now
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}
