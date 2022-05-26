import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, removeTodoById } from "../../store/actions/todosAction";
import TodoItem from "../todo/TodoItem";
import "./todoList.css";
import { fetchTodos } from "../../store/actions/todosAction";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Form } from "../form/Form";

export default function TodoList({status}) {
  const todos = useSelector((state) => state.todos);
  const [open, setOpen] = useState(status);
  const handleOpen = () => {
    setOpen(true);
    navigate("/form");
  };
  const handleClose = () => {
    navigate("/");
    setOpen(false);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());    
  }, [dispatch]);

  function changeToggleOnClick(todo) {
    dispatch(toggleTodo(todo));
  }
  function onDelete(id) {
    dispatch(removeTodoById(id));
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
            onDelete={onDelete}
          />
        );
      })}
      <Button
        style={{ display: "block", margin: "20px auto" }}
        variant="contained"
        onClick={handleOpen}
      >
        AddTodo
      </Button>
      <Form open={open} handleClose={handleClose} />
    </Box>
  );
}
