import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { propsStack } from "../../routes/types";
import { themes } from "../../utils/theme";
import SignUpForm from "../components/SignUpForm";
import { signUp } from "../../api/SignUp";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigation<propsStack>();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSignUp = async () => {
    setLoading(true);

    if (password !== confPassword) {
      setLoading(false);
      Alert.alert("Erro", "As senhas não correspondem.");
      return;
    }

    try {
      await signUp({ email, password });
      setLoading(false);
      Alert.alert("Sucesso", "Registro realizado com sucesso.");
      navigate("Login");
    } catch (error) {
      setLoading(false);
      Alert.alert("Erro", error.message);
    }
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
        <Text style={styles.message}>Cadastrar</Text>
      </Animatable.View>

      <SignUpForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confPassword={confPassword}
        setConfPassword={setConfPassword}
        isPasswordVisible={isPasswordVisible}
        togglePasswordVisibility={togglePasswordVisibility}
        handleSignUp={handleSignUp}
        loading={loading}
      />
    </View>
  );
}

export default SignUp;