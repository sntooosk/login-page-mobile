import Credentials from "../models/Credentials";
import { API } from "./api";

export async function signIn(credentials: Credentials) {
  try {
    const response = await fetch(`${API}/login`, {
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