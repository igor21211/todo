import React from "react";


import "../app/app.css"
import AppHeaders from "../app-headers";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";



const App = () => {

    const todoData = [
        {label: 'Drink Coffe', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 3},
        {label: 'Have a lunch', important: false, id: 2},
    ];

    return (
        <div className="todo-app">
            <AppHeaders toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoData}/>
        </div>
    );
}

export default App;