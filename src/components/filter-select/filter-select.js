import React from 'react';
import './filter-select.css';

const FilterSelect = () => {
    return (
        <select className="select-input">
            <option className="select-input__option" value="stared">Favorites</option>
            <option className="select-input__option" value="done">Done</option>
            <option className="select-input__option" value="deleted">Deleted</option>
        </select>
    )
}

export default FilterSelect;