import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { themes } from "../../utils/styles/colors";
import SignUpForm from "../components/SignUpForm";
import { styles } from "./styles";
import { propsStack } from "../../routes/types";
import { useAuth } from "../../context/AuthContext";

function SignUp() {
  const { signUp, isLoading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { navigate } = useNavigation<propsStack>();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSignUp = async () => {
    if (password !== confPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      await signUp({ name, email, password });
      Alert.alert("Success", "Registration successful.");
      navigate("SignIn");
    } catch (error) {
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
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confPassword={confPassword}
        setConfPassword={setConfPassword}
        isPasswordVisible={isPasswordVisible}
        togglePasswordVisibility={togglePasswordVisibility}
        handleSignUp={handleSignUp}
        loading={isLoading}
      />
    </View>
  );
}

export default SignUp;
