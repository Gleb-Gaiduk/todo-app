import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ( { todoItems, onCheckboxToggle, onStarToggle } ) => {
    const listElements = todoItems.map(item => {
       
        return (
            <li key={ item.id }>
                <TodoListItem
                itemData={ item }
                onCheckboxToggle={ () => onCheckboxToggle(item.id) }
                onStarToggle={ () => onStarToggle(item.id) } />
            </li>
        )
    });
    
    return (
        <ul className="todo-list">
            { listElements }
        </ul>
    );
};

export default TodoList;