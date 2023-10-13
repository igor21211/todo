import React, {Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {


    render() {
        const {label, onDeleted, onImportant, onDone, important, done} = this.props;

        let className = "todo-list-item";
        if (done) {
            className += ' done'
        }
        if (important) {
            className += ' important'
        }

        return (
            <span className={className}>
      <span
          className="todo-list-item-label"
          onClick={onDone}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onImportant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
      onClick={onDeleted}>
        <i className="fa fa-trash-o"/>
      </button>
    </span>
        );
    }
}

