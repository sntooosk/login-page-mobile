import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoutes from "./stack.routes";

export default function Router() {
  return (
    <NavigationContainer independent={true}>
      <StackRoutes />
    </NavigationContainer>
  );
}
