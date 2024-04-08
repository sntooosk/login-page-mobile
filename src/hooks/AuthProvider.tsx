import React, { useEffect, useState, ReactNode } from "react";
import { asyncGetUser } from "../utils/storage/AuthStorage";
import User from "../models/User";
import { AuthContext } from "../context/AuthContext";
import { signIn } from "../api/SignIn";
import { signUp } from "../api/SignUp";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authData, setAuthData] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    const user = await asyncGetUser();
    setIsLoading(true);
    if (user) {
      setAuthData(user);
    }
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{
        authData,
        signIn,
        signUp,
        isLoading,
        setAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
