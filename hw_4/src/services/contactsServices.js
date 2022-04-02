import { API_URL } from "../constants";

export function getContacts() {
  return fetch(API_URL).then((resp) => resp.json());
}
export function deleteContact(id) {
  return fetch(API_URL + "/" + id, {
    method: "DELETE",
  }).then((resp) => resp.json());
}

export function createContact(newItem) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  }).then((resp) => resp.json());
}
