import api from "../api/api";
import { API_URL_USERS } from "../constans/index";

export default function getUsers() {
  return api.get(API_URL_USERS).then((resp) => resp.data);
}
