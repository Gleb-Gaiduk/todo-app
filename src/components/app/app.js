import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';


export default class App extends Component {
    
    state = {
        listData: [
            { text: 'Create Awesome React Up', done: false, important: false, id: 1, tag: 'Work' },
            { text: 'Start Frontend Developer Career', done: false, important: false, id: 2, tag: 'Coding' },
            { text: 'Drink Green Tea', done: false, important: false, id: 3, tag: 'Friends' },
            { text: 'Run 10 km', done: false, important: false, id: 4, tag: 'Sport' }
        ]
    };
    
    onCheckboxToggle = (id) => {
        this.setState(({ listData }) => {
           const updatedElemIndex = listData.findIndex(item => item.id === id);
           const currentStateElem = listData[updatedElemIndex];
           const newStateElem = { ...currentStateElem, done: !currentStateElem.done };
           const newStateArray = [
               ...listData.slice(0, updatedElemIndex),
               newStateElem,
               ...listData.slice(updatedElemIndex + 1)
           ];
           console.log('hello', id);
           
            return {
                listData: newStateArray
            }
        });
    };
    
    onStarToggle = (id) => {
        this.setState(({ listData }) => {
            const updatedElemIndex = listData.findIndex(item => item.id === id);
            const currentStateElem = listData[updatedElemIndex];
            const newStateElem = { ...currentStateElem, important: !currentStateElem.important };
            const newStateArray = [
                ...listData.slice(0, updatedElemIndex),
                newStateElem,
                ...listData.slice(updatedElemIndex + 1)
            ];
            
            return {
                listData: newStateArray
            }
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
                        
                    </div>
                    <main className="page__main">
                        <TodoList
                        todoItems={ listData }
                        onCheckboxToggle={ this.onCheckboxToggle }
                        onStarToggle={ this.onStarToggle }/>
                    </main>
                </div>
            </div>
        );
    };
};