export const ACTION_TOGGLE_COMPLETED = "ACTION_TOGGLE_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";
export const ON_CHANGE = "ON_CHANGE";

export const toogleCompleted = (payload) => ({
  type: ACTION_TOGGLE_COMPLETED,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
