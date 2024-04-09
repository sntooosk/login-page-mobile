import React, { useState } from "react";
import { View, Text, Alert, Image } from "react-native";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";
import { useAuth } from "../../context/AuthContext";
import { themes } from "../../utils/theme";
import SignInForm from "../components/SignInForm";

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
        "Erro",
        "Ocorreu um erro ao fazer login. Por favor, tente novamente."
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
      style={[
        styles.container,
        { backgroundColor: themes.light.COLORS.PRIMARY },
      ]}
    >
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Image
          source={require("../../assets/svg/logo.svg")}
          style={{ width: "50%" }}
          resizeMode="contain"
        />
      </Animatable.View>

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
