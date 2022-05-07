import {
  ACTION_TOGGLE_COMPLETED,
  DELETE_TODO,
  ADD_TODO,
} from "../actions/action";

const INITIAL_STATE = {
  todos: [
    {
      id: "14",
      title: "Сделать утреннюю зарядку",
      completed: true,
    },
    {
      id: "16",
      title: "Купить продукты",
      completed: false,
    },
    {
      id: "18",
      title: "Сделать домашнее задание",
      completed: false,
    },
    {
      id: "19",
      title: "Сходить в кино",
      completed: true,
    },
    {
      id: "20",
      title: "Позвонить другу",
      completed: false,
    },
  ],
};
export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_TOGGLE_COMPLETED:
      const newTodos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      return { todos: newTodos };
    case DELETE_TODO:
      const withoutDeletedTodo = state.todos.filter(
        (todo) => todo.id !== payload.id
      );
      return { todos: withoutDeletedTodo };

    case ADD_TODO:
      let newId = state.todos.slice(-1)[0].id;
      const newTodoText = {
        id: String(++newId),
        title: payload,
        completed: false,
      };
      if (payload.trim().length > 0) {
        const todosWithNewTodo = [...state.todos, newTodoText];
        return { todos: todosWithNewTodo };
      } else {
        alert("Enter some message");
        return state;
      }

    default:
      return state;
  }
}
