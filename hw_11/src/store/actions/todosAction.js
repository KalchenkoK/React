import {
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} from "../../services/todoService";

export const TODOS_SET_TODOS = "TODOS_SET_TODOS";
export const TODOS_TOGGLE_TODO = "TODOS_TOGGLE_TODO";
export const TODOS_ADD_TODO = "TODOS_ADD_TODO";

export const setTodos = (todos) => ({
  type: TODOS_SET_TODOS,
  payload: todos,
});

export const fetchTodos = () => {
  return function (dispatch) {
    getTodos().then((todos) => dispatch(setTodos(todos)));
  };
};

export const toggleTodo = (finedTodo) => {
  return function (dispatch, getState) {
    const { todos } = getState();
    let updateTodoItem = todos.find((todo) => todo.id === finedTodo.id);
    updateTodoItem = {
      ...updateTodoItem,
      completed: !updateTodoItem.completed,
    };

    updateTodo(updateTodoItem).then(() => {
      const updatedTodos = todos.map((todo) =>
        todo.id === finedTodo.id ? updateTodoItem : todo
      );
      dispatch(setTodos(updatedTodos));
    });
  };
};

export const removeTodoById = (id) => {
  console.log(id)
  return function (dispatch, getState) {
    deleteTodo(id).then(() => {
      const { todos } = getState();
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      dispatch(setTodos(updatedTodos));
    });
  };
};

export const addTodo = (todo) => ({
  type: TODOS_ADD_TODO,
  payload: todo,
});

// export const createNewTodo = (todo) =>  {
//   return function (dispatch) {
//     createTodo(todo).then(() => dispatch(addTodo(todo)));
//   };
// };

export const createNewTodo = (todo) => async (dispatch, getState)=> {
  const data = await createTodo(todo)
  const { todos } = getState();
  const newTodos = [...todos, todo] 
  dispatch(setTodos(newTodos))
  return data
};