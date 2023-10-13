import React, {Component} from "react";


import "../app/app.css"
import AppHeaders from "../app-headers";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import AddItem from "../add-item";


export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffe'),
            this.createTodoItem('Make Application'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Practice Code')
        ],
        term: '',
        filter: 'active' //active,
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };

    };


    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, index);
            const after = todoData.slice(index + 1);
            const result = [...before, ...after];
            return {
                todoData: result
            };
        });
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]}

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];

    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    }

    search(items, term){
        if(term.length === 0){
            return items;
        }
        return  items.filter((item) => {
            return item.label
                .toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }
    onSearchChange = (term) => {
        this.setState({term});
    };
    onFilterChange = (filter) => {
        this.setState({filter})
    }

    filter(items, filter){
        switch (filter){
            case 'all':
              return items;
            case 'active':
                return items.filter((item)=> !item.done)
            case 'done':
                return items.filter((item)=> item.done)
            default:
                return items;
        }
    }

    render() {
        const {todoData, term,filter} = this.state
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeaders toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onImportant={this.onToggleImportant}
                    onDone={this.onToggleDone}
                />
                <AddItem onItemAdd={this.addItem}/>
            </div>
        );
    }
}


