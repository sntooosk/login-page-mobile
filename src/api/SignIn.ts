import axios from "axios";
import { API } from "./api";
import Credentials from "../models/Credentials";

export async function signIn(credentials: Credentials) {
  try {
    const response = await axios.post(`${API}/login`, credentials);
    const { data } = response;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Erro ao efetuar login");
  }
}
