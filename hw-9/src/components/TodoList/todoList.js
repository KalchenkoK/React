import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  Box  from "@mui/material/Box";
import {
  toogleCompleted,
  deleteTodo,
  addTodo,
} from "../../store/actions/action";
import TodoItem from "../TodoItem/todoItem";
import AddTodo from "../TodoItem/addTodo";
import "./todoList.css";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  function changeToggleOnClick(todo) {
    dispatch(toogleCompleted(todo));
  }
  function deleteEl(todo) {
    dispatch(deleteTodo(todo));
  }
  function onChangeInput(e) {
    setValue(e);
  }
  function onAddButtonClick(value) {
    dispatch(addTodo(value));
    setValue("");
  }

  return (
    <Box>
      {todos.map((el) => {
        let backColor = el.completed ? "completed" : "noCompleted";
        return (
          <TodoItem
            className={backColor}
            item={el}
            changeToggleOnClick={changeToggleOnClick}
            key={el.id}
            deleteEl={deleteEl}
          />
        );
      })}
      <AddTodo
        onChangeInput={onChangeInput}
        onAddButtonClick={onAddButtonClick}
        valueInput={value}
      />
    </Box>
  );
}
