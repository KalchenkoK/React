import { Component } from "react";
import "./todoItem.css";

export default class TodoItem extends Component {
  render() {
    const { title, id } = this.props.item;
    const { className, onButtonClick } = this.props;
    return (
      <div className="table">
        <li className={className}>{title}</li>
        <button onClick={() => onButtonClick(id)}>Delete</button>
      </div>
    );
  }
}
