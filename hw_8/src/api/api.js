import axios from "axios";
import { API_URL, USERS_URL} from "../constans";

export const placeHolderCreate = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const mockApiCreate =  axios.create({
  baseURL: USERS_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
