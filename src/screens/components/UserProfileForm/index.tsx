import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { themes } from "../../utils/theme";

interface UserProfileFormProps {
  username: string;
  name: string;
  lastName: string;
  email: string;
  dob: string;
  setUsername: (text: string) => void;
  setName: (text: string) => void;
  setLastName: (text: string) => void;
  setEmail: (text: string) => void;
  setDob: (text: string) => void;
  handleSaveProfile: () => void;
  loading: boolean;
}


export default function UserProfileForm({
  username,
  name,
  lastName,
  email,
  dob,
  setUsername,
  setName,
  setLastName,
  setEmail,
  setDob,
  handleSaveProfile,
  loading,
}: UserProfileFormProps) {
  const formatBirthdateInput = (inputValue: any) => {
    const formattedValue = inputValue
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})\d+?$/, "$1");
    return formattedValue;
  };

  return (
    <View
      style={[
        styles.containerForm,
        { backgroundColor: themes.light.COLORS.BACKGROUND },
      ]}
    >
      <ScrollView>
        <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
          Usuário:
        </Text>
        <TextInput
          style={[styles.input, { color: themes.light.COLORS.TEXT }]}
          placeholder={"Digite seu Usuário"}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
          Nome:
        </Text>
        <TextInput
          style={[styles.input, { color: themes.light.COLORS.TEXT }]}
          placeholder={"Digite seu Nome"}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
          Sobrenome:
        </Text>
        <TextInput
          style={[styles.input, { color: themes.light.COLORS.TEXT }]}
          placeholder={"Digite seu Sobrenome"}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
        <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
          Data de Nascimento:
        </Text>
        <TextInput
          style={[styles.input, { color: themes.light.COLORS.TEXT }]}
          placeholder={"Digite sua Data de Nascimento"}
          onChangeText={(text) => setDob(formatBirthdateInput(text))}
          value={dob}
          keyboardType="numeric"
        />

        <Text style={[styles.title, { color: themes.light.COLORS.CARD_TITLE }]}>
          Email:
        </Text>
        <TextInput
          style={[styles.input, { color: email.trim() ? "gray" : "black" }]}
          placeholder={"Digite seu Email"}
          value={email}
          pointerEvents={email.trim() ? "none" : "auto"}
          onChangeText={(text) => setEmail(text)}
        />
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: themes.light.COLORS.BUTTON }]}
        onPress={handleSaveProfile}
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
            Salvar
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
