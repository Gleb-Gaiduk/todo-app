import React from 'react';
import './filter-select.css';



const FilterSelect = ( { setFilterCompleteValue } ) => {
    function onFilterChange(event) {
        const filterValue = event.target.value;
        setFilterCompleteValue(filterValue);
    };
    
    return (
        <select className="select-input"
                onChange= { onFilterChange }>
            <option className="select-input__option" value="all">All</option>
            <option className="select-input__option" value="important">Important</option>
            <option className="select-input__option" value="done">Done</option>
            <option className="select-input__option" value="deleted">Deleted</option>
        </select>
    );
};

export default FilterSelect;