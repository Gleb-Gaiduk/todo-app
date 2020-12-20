import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = () => {
    
    return (
        <ul className="todo-list">
            <TodoListItem />
        </ul>
    );
};

export default TodoList;
