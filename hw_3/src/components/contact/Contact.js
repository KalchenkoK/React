import { Component } from "react";
import "./contact.css";
export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="table">
          {/* console.log({this.props.state}); */}
          <div>{this.props.state.name}</div>
          <div>{this.props.state.sername}</div>
          <div>{this.props.state.phone}</div>
          <button
            onClick={() => this.props.onButtonDelete(this.props.state.id)}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}
