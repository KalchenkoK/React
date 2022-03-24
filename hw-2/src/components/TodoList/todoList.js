import React, { Component } from "react";
import TodoItem from "../TodoItem/todoItem";
import "./todoList.css";
export default class TodoList extends Component {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  state = {
    todo: [
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

  render() {
    const { todo } = this.state;
    return (
      <>
        {todo.map((el) => {
          let backColor = el.completed ? "backColor" : null;
          return (
            <TodoItem
              className={backColor}
              item={el}
              onButtonClick={this.onButtonClick}
              key={el.id}
            />
          );
        })}
      </>
    );
  }
  onButtonClick(id) {
    const newState = this.state.todo.filter((onetodo) => onetodo.id !== id);
    this.setState({ todo: newState });
  }
}
