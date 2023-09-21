import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        const {id, ...itemsProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemsProps}/>
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}
export default TodoList;