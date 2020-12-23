import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AppSidebar from '../app-sidebar/app-sidebar';
import ModalWindow from '../modal-window/modal-window';

export default class App extends Component {
    startId = 4;
    
    state = {
        listData: [
            this.createListItem('Create Awesome React Up', 1, 'Coding'),
            this.createListItem('Start Frontend Developer Career', 2, 'Work'),
            this.createListItem('Drink Green Tea', 3, 'Friends'),
            this.createListItem('Run 10 km', 4, 'Sport')
        ],
        searchTerm: ''
    };
        
    createListItem(text, id, tag, done = false, important = false) {
        const newItem = {
            text,
            id,
            tag,
            done,
            important
        };
        return newItem;
    }
    
    addListItem = (text, tag) => {
        const newListItem = this.createListItem(text, ++this.startId, tag);
        this.setState(( { listData } ) => {
            const newStateArray = [...listData, newListItem];
            return {
                listData: newStateArray
            }
        })
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
    
    setSearchTerm = (text) => {
        this.setState({
            searchTerm: text
        });
    };
    
    getSearchedItems = (itemsArray, searchTerm) => {
        let visibleArray = itemsArray.filter(item => item.text.toLowerCase().includes(searchTerm.toLowerCase()));
        if (searchTerm.length === 0) {
            visibleArray = [...itemsArray];
        }
        return visibleArray;
    };
    
    render() {
        const { listData, searchTerm } = this.state;
        const visibleItems = this.getSearchedItems(listData, searchTerm);
        
        return (
            <div className="page">
                <AppHeader />
                <div className="page__container">
                    <div className="page__search-panel">
                        <SearchPanel
                            setSearchTerm={ this.setSearchTerm }/>
                    </div>
                    <div className="page__sidebar">
                        <AppSidebar />
                    </div>
                    <main className="page__main">
                        <TodoList
                            todoItems={ visibleItems }
                            onCheckboxToggle={ this.onCheckboxToggle }
                            onStarToggle={ this.onStarToggle }
                            onItemDelete={ this.onItemDelete }/>
                    </main>
                </div>
                <ModalWindow
                    addListItem={ this.addListItem }/>
            </div>
        );
    };
};