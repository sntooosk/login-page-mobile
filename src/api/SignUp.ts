import User from "../models/User";
import { API } from "./api";

export async function signUp(credentials: User) {
  try {
    const response = await fetch(`${API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Erro ao registrar usuário");
    }

    const { user } = await response.json();
    
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}
