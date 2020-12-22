import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AppSidebar from '../app-sidebar/app-sidebar';
import ModalWindow from '../modal-window/modal-window';

export default class App extends Component {
    
    state = {
        listData: [
            { text: 'Create Awesome React Up', done: false, important: false, id: 1, tag: 'Work' },
            { text: 'Start Frontend Developer Career', done: false, important: false, id: 2, tag: 'Coding' },
            { text: 'Drink Green Tea', done: false, important: false, id: 3, tag: 'Friends' },
            { text: 'Run 10 km', done: false, important: false, id: 4, tag: 'Sport' }
        ]
    };
    
    itemButtonToggleHandler = (array, toggledProp, id) => {
        const updatedElemIndex = array.findIndex(item => item.id === id);
            const currentStateElem = array[updatedElemIndex];
            const newStateElem = { ...currentStateElem, [toggledProp]: !currentStateElem[toggledProp] };
            const newStateArray = [
                ...array.slice(0, updatedElemIndex),
                newStateElem,
                ...array.slice(updatedElemIndex + 1)
            ];
            return newStateArray;
    };
    
    onCheckboxToggle = (id) => {
        this.setState(({ listData }) => {
            return {
                listData: this.itemButtonToggleHandler(listData, 'done', id)
            }
        });
    };
    
    onStarToggle = (id) => {
        this.setState(({ listData }) => {
            return {
                listData: this.itemButtonToggleHandler(listData, 'important', id)
            }
        });
    };
    
    onItemDelete = (id) => {
        this.setState(({ listData }) => {
            const removedItemIndex = listData.findIndex(item => item.id === id);
            const newStateArray = [
                ...listData.slice(0, removedItemIndex),
                ...listData.slice(removedItemIndex + 1)
            ]
            
            return {
                listData: newStateArray
            };
        });
    };
    
    render() {
        const { listData } = this.state;
        
        return (
            <div className="page">
                <AppHeader />
                <div className="page__container">
                    <div className="page__search-panel">
                        <SearchPanel />
                    </div>
                    <div className="page__sidebar">
                        <AppSidebar />
                    </div>
                    <main className="page__main">
                        <TodoList
                        todoItems={ listData }
                        onCheckboxToggle={ this.onCheckboxToggle }
                        onStarToggle={ this.onStarToggle }
                        onItemDelete={ this.onItemDelete }/>
                    </main>
                </div>
                <ModalWindow />
            </div>
        );
    };
};