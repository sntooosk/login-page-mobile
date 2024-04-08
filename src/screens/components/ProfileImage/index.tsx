import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ProfileImageProps {
  photo: string | null;
  onPress: () => void;
}

export default function ProfileImage({ photo, onPress }: ProfileImageProps) {
  return (
    <TouchableOpacity style={styles.profileImageContainer} onPress={onPress}>
      <Image
        source={photo && photo !== "" ? { uri: photo } : require("../../assets/user.png")}
        style={styles.profileImage}
      />
    </TouchableOpacity>
  );
}
