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
            this.createTagItem('All', 1),
            this.createTagItem('Coding', 2, 'purple'),
            this.createTagItem('Work', 3, 'red'),
            this.createTagItem('Friends', 4, 'blue'),
            this.createTagItem('Sport', 5, 'green'),
            this.createTagItem('Social', 6, 'orange')
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
    
    createTagItem(tag, id, color = 'default') {
        const newTag = {
            tag,
            id,
            color
        };
        return newTag;
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
    
    isExistingTag(text) {
        const tagIndex = this.state.tagsData.findIndex(item => item.tag.toLowerCase() === text.toLowerCase());
        if (tagIndex > -1) {
            return true;
        } else return false
    }
    
    addTagItem = (text) => {
        if (!this.isExistingTag(text)) {
            const newTagItem = this.createTagItem(text, ++this.startId);
            this.setState(({ tagsData }) => {
                const newStateArray = [...tagsData, newTagItem];
                return {
                    tagsData: newStateArray
                };
            });
        }
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
    
    getFilteredByStatus(itemsArray, filterValue) {
        let filteredArray = itemsArray.filter(item => item[filterValue]);
        
        if (filterValue === 'all') {
            filteredArray = [...itemsArray];
        }
        
        if (filterValue === 'deleted') {
            filteredArray = [...itemsArray].filter(item => item.removed);
        }
        
        return filteredArray;
    }
    
    getFilteredByTag = (itemsArray, tagValue) => {
        let filteredArray = [...itemsArray].filter(item => item.tag.toLowerCase() === tagValue.toLowerCase());
        
        if (tagValue === 'All') {
            filteredArray = [...itemsArray];
        }
        
        return filteredArray;
    };
    
    render() {
        const { listData, tagsData, searchTerm, filterCompleteValue, filterTagValue } = this.state;
        
        const searchedItems = this.getSearchedItems(listData, searchTerm);
        const filteredItemsByStatus = this.getFilteredByStatus(searchedItems, filterCompleteValue);
        const filteredByTag = this.getFilteredByTag(filteredItemsByStatus, filterTagValue)
        
        const visibleItems = filteredByTag;
        
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
                    addListItem={ this.addListItem }
                    addTagItem={ this.addTagItem }/>
            </div>
        );
    };
};