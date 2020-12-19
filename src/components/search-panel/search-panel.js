import React, { Component } from 'react';
import './search-panel.css';

import FilterSelect from '../filter-select/filter-select';
import TextInput from '../text-input/text-input';
import SearchIcon from './search-icon.svg';

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <button className="search-panel__menu-button" type="button">
                <svg className="search-panel__menu-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            
            <form className="search-panel__form" action="" method="get">
                <div className="search-panel__select">
                    <FilterSelect />
                </div>
                <div className="search-panel__flex-wrapper">
                    <div className="search-panel__input-group">
                        <TextInput placeholder={ "Task search" }/>
                        <button className="search-panel__search-button" type="submit"></button>
                    </div>
                    <span className="search-panel__statistics">
                        2 Tasks Done Out of 10
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SearchPanel;