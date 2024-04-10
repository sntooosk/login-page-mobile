import React, { createContext, useContext } from "react";
import Credentials from "../models/Credentials";
import User from "../models/User";

interface AuthContextData {
  authData?: User;
  setAuthData: React.Dispatch<React.SetStateAction<User | undefined>>;
  signIn: (credentials: Credentials) => Promise<void>;
  signUp: (credentials: User) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextData>({
  authData: undefined,
  setAuthData: () => {},
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  isLoading: false,
});

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
