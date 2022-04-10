import { API_URL } from "../constants/index";

export function getCards() {
  return fetch(API_URL).then((resp) => resp.json());
}

export function deleteCard(id) {
  return fetch(API_URL + "/" + id, {
    method: "DELETE",
  }).then((resp) => resp.json());
}

export function createCard(newCard) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCard),
  }).then((resp) => resp.json());
}

export function updateCard(id, newCard) {
  return fetch(API_URL + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCard),
  });
}
