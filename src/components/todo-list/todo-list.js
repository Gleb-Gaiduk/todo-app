import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ( { todoItems, tagsData, onCheckboxToggle, onStarToggle, onItemDelete } ) => {
    const listElements = todoItems.map(item => {
        return (
            <li key={ item.id }>
                <TodoListItem
                    tagsData={ tagsData }
                    itemData={ item }
                    onCheckboxToggle={ () => onCheckboxToggle(item.id) }
                    onStarToggle={ () => onStarToggle(item.id) }
                    onItemDelete={ () => onItemDelete(item.id) } />
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
