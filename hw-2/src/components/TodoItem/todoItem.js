import { Component } from "react";
import "./todoItem.css"

export default class TodoItem extends Component {
  render() {
    const { className,title, deleteF } = this.props
    return (
      <>
        <div className="table">
          <li className={className}>{title}        
          
           </li>
           <button onClick={deleteF}>Delete</button>
                    
        </div>
      </>
    );
  }
 
}
