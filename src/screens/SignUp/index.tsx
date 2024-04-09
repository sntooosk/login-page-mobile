import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { themes } from "../../utils/styles/colors";
import SignUpForm from "../components/SignUpForm";
import { signUp } from "../../api/SignUp";
import { styles } from "./styles";
import { propsStack } from "../../routes/types";

function SignUp() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
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
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      await signUp({ id, name, email, password });
      setLoading(false);
      Alert.alert("Success", "Registration successful.");
      navigate("SignIn");
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: themes.COLORS.PRIMARY }]}
    >
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Sign Up</Text>
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
