// import api from "../api/api";
import { USERS_URL } from "../constans/index";
import { mockApiCreate } from "../api/api";

export function getUsers() {
  return mockApiCreate.get().then((resp) => resp.data);
}

export function deleteUser(id) {
  return mockApiCreate.delete(id).then((resp) => resp.data);
}

export function addUser(newUser) {
  return mockApiCreate.post("", newUser).then((resp) => resp.data);
}

export function updateUser(newUser) {
  return mockApiCreate
    .put( newUser.id, newUser)
    .then((resp) => resp.data);
}
