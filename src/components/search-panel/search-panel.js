import React, { Component } from 'react';
import './search-panel.css';

import FilterSelect from '../filter-select/filter-select';
import TextInput from '../text-input/text-input';
import SearchIcon from './search-icon.svg';

export default class SearchPanel extends Component {

    onSearchChange = (event) => {
        const searchTerm = event.target.value;
        this.props.setSearchTerm(searchTerm);
    };
    
    render () {
        const { doneNumber, totalNumber, setFilterCompleteValue, onMenuClick } = this.props;
        
        return (
            <div className="search-panel">
                <button 
                    className="search-panel__menu-button"
                    type="button"
                    onClick={ onMenuClick }>
                        <svg className="search-panel__menu-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                
                <form className="search-panel__form" action="" method="get">
                    <div className="search-panel__select">
                        <FilterSelect
                            setFilterCompleteValue={ setFilterCompleteValue } />
                    </div>
                    <div className="search-panel__flex-wrapper">
                        <div className="search-panel__input-group">
                            <input
                                className="text-input"
                                type="text"
                                placeholder={ "Task search" }
                                onChange = { this.onSearchChange } />
                        </div>
                        <span className="search-panel__statistics">
                            { doneNumber } Tasks Done Out of { totalNumber }
                        </span>
                    </div>
                </form>
            </div>
        );
    }
};