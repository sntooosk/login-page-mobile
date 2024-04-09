import React, { useState } from "react";
import { View, Text, Alert, Image } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { themes } from "../../utils/styles/colors";
import SignInForm from "../components/SignInForm";
import { styles } from "./styles";

import LogoSvg from "../../assets/svg/logo.svg";


function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signIn({ email, password });
    } catch (error) {
      Alert.alert(
        "Error",
        "An error occurred while logging in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: themes.COLORS.PRIMARY }]}
    >
      <LogoSvg width={200} height={150} />

      <SignInForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isPasswordVisible={isPasswordVisible}
        togglePasswordVisibility={togglePasswordVisibility}
        handleLogin={handleLogin}
        loading={loading}
      />
    </View>
  );
}

export default SignIn;
