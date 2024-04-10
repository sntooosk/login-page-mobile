import { ReactNode, useEffect, useState } from "react";
import User from "../models/User";
import { AuthContext } from "../context/AuthContext";
import Credentials from "../models/Credentials";
import { signIn as signInApi } from "../api/SignIn";
import { signUp as signUpApi } from "../api/SignUp";
import { asyncGetUser, asyncSetUser } from "../utils/storage/AuthStorage";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    loadFromStorage();
  }, []);

  const loadFromStorage = async () => {
    setIsLoading(true);
    try {
      const user = await asyncGetUser();
      if (user) {
        setAuthData(user);
      }
    } catch (error) {
      console.error("Error loading user from storage:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (credentials: Credentials) => {
    setIsLoading(true);
    try {
      const user = await signInApi(credentials);
      setAuthData(user);
      await asyncSetUser(user);
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (user: User) => {
    setIsLoading(true);
    try {
      await signUpApi(user);
      setAuthData(user);
      await asyncSetUser(user);
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
        signIn,
        signUp,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
