import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { themes } from "../../../utils/theme";

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
      <Text style={[styles.title, { color: themes.light.COLORS.TITLE }]}>
        Name
      </Text>
      <TextInput
        placeholder={"Jonh Doe"}
        placeholderTextColor={themes.light.COLORS.TEXT}
        style={[styles.input, { color: themes.light.COLORS.CONTENT }]}
        onChangeText={(text) => setEmail(text)}
      />

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

      <Text style={[styles.title, { color: themes.light.COLORS.TITLE }]}>
        Confirm Password
      </Text>
      <TextInput
        placeholder={"Confirm your password"}
        placeholderTextColor={themes.light.COLORS.TEXT}
        style={[styles.input, { color: themes.light.COLORS.CONTENT }]}
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
          {isPasswordVisible ? "Hide password" : "Show password"}
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
            Register
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
