import axios from "axios";
import { API } from "./api";
import User from "../models/User";

export async function signUp(user: User) {
  try {
    const response = await axios.post(`${API}/register`, user);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error("Erro ao efetuar cadastro");
  }
}
