import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AppSidebar from '../app-sidebar/app-sidebar';
import ModalWindow from '../modal-window/modal-window';

export default class App extends Component {
    startId = 15;
    
    state = {
        listData: [
            this.createListItem('Create Awesome React Up', 1, 'Coding'),
            this.createListItem('Start Frontend Developer Career', 2, 'Work'),
            this.createListItem('Buy Presents', 3, 'Friends'),
            this.createListItem('Run 10 km', 4, 'Sport'),
            this.createListItem('Finish the React Learning Program', 5, 'Coding'),
            this.createListItem('Make plans for 2021', 6, 'Work')
        ],
        tagsData: [
            { tag: 'All', color: '', id: 1 },
            { tag: 'Coding', color: 'purple', id: 2 },
            { tag: 'Work', color: 'red', id: 3 },
            { tag: 'Friends', color: 'blue', id: 4 },
            { tag: 'Sport', color: 'green', id: 5 },
            { tag: 'Social', color: 'orange', id: 6 }
        ],
        searchTerm: '',
        filterCompleteValue: 'all',
        filterTagValue: 'All'
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
    };
    
    addListItem = (text, tag) => {
        const newListItem = this.createListItem(text, ++this.startId, tag);
        this.setState(( { listData } ) => {
            const newStateArray = [...listData, newListItem];
            return {
                listData: newStateArray
            }
        });
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
            const removedElement = listData[removedItemIndex];
            removedElement.removed = true;
            
            const newStateArray = [
                ...listData.slice(0, removedItemIndex),
                removedElement,
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
    
    setFilterCompleteValue = (filterCompleteValue) => {
        this.setState({ filterCompleteValue });
    };
    
    setFilterTagValue = (filterTagValue) => {
        this.setState({ filterTagValue })
    };
    
    getSearchedItems = (itemsArray, searchTerm) => {
        let visibleArray = itemsArray.filter(item => item.text.toLowerCase().includes(searchTerm.toLowerCase()));
        
        if (searchTerm.length === 0) {
            visibleArray = [...itemsArray];
        }
        
        return visibleArray;
    };
    
    getFilteredItems = (itemsArray, completeValue, tagValue) => {
        let filteredArray = itemsArray.filter(item => item[completeValue]);
        
        if (completeValue === 'all') {
            filteredArray = [...itemsArray];
        }
        
        if (completeValue === 'deleted') {
            filteredArray = [...itemsArray].filter(item => item.removed);
        }
        
        if (tagValue === 'Friends') {
            filteredArray = [...itemsArray].filter(item => item.tag === 'Friends');
        }
        
        if (tagValue === 'Sport') {
            filteredArray = [...itemsArray].filter(item => item.tag === 'Sport');
        }
        
        if (tagValue === 'Work') {
            filteredArray = [...itemsArray].filter(item => item.tag === 'Work');
        }
        
        if (tagValue === 'Coding') {
            filteredArray = [...itemsArray].filter(item => item.tag === 'Coding');
        }
        
        return filteredArray;
    };
    
    render() {
        const { listData, tagsData, searchTerm, filterCompleteValue, filterTagValue } = this.state;
        
        const searchedItems = this.getSearchedItems(listData, searchTerm);
        const visibleItems = this.getFilteredItems(searchedItems, filterCompleteValue, filterTagValue);
        
        const doneNumber = listData.filter(item => item.done).length;
        const totalNumber = listData.length;
        
        return (
            <div className="page">
                <AppHeader />
                <div className="page__container">
                    <div className="page__search-panel">
                        <SearchPanel
                            setSearchTerm={ this.setSearchTerm }
                            doneNumber={ doneNumber }
                            totalNumber={ totalNumber }
                            setFilterCompleteValue={ this.setFilterCompleteValue }/>
                    </div>
                    <div className="page__sidebar">
                        <AppSidebar
                            tagsData={ tagsData }
                            setFilterTagValue={ this.setFilterTagValue }/>
                    </div>
                    <main className="page__main">
                        <TodoList
                            todoItems={ visibleItems }
                            tagsData={ tagsData }
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