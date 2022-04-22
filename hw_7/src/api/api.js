import axios from "axios";
import { API_URL_USERS } from "../constans";

export default axios.create({
  baseURL: API_URL_USERS,
  headers: {
    "Content-Type": "application/json",
  },
});
