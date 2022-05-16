import api from "../api/api";

export function getUsers() {
  return api.get().then((resp) => resp.data);
}
export function deleteUser(id) {
  return api.delete(id).then((resp) => resp.data);
}
export function updateUser(user) {
  return api.put(user.id, user).then((resp) => resp.data);
}
export function createUser(user) {
  return api.post("", user).then((resp) => resp.data);
}
