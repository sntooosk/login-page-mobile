import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoutes from "./stack.routes";
import SignUp from "../screens/SignUp";

export default function Router() {
  return (
    <NavigationContainer independent={true}>
      <SignUp />
    </NavigationContainer>
  );
}
