import api from "../api/api";

export function getTodos() {
  return api.get().then((resp) => resp.data);
}
export function updateTodo(todo) {
  return api.put(todo.id, todo).then((resp) => resp.data);
}
export function deleteTodo(id) {
  return api.delete(id).then((resp) => resp.data);
}

export function createTodo(todo) {
  return api.post("", todo).then((resp) => resp.data);
}
