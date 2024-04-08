import Credentials from "../models/Credentials";
import { API_BASE_URL } from "./api";

export async function signIn(credentials: Credentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas");
    }

    const { user } = await response.json();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}