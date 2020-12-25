import React from 'react';
import './tag-list.css';
import '../common-styles/tag-color.css';

const TagList = ({ tagsData, setFilterTagValue }) => {
    
    function onListClick(event) {
        const tagValue = event.target.textContent;
        setFilterTagValue(tagValue);
    };
    
    function getClassName(color) {
        let baseClass = 'tag-list__icon ';
        baseClass += `background--${ color }`;
        if (color === '') baseClass += 'background--default';
        return baseClass;
    }
    
    const tagElements = tagsData.map(item => {
        const { tag, color, id } = item;
        
        return (
            <li key={ id } className="tag-list__item">
                <span className={ getClassName(color) }></span>
                <span className="tag-list__text">{ tag }</span>
            </li>
        )
    });
    
    return (
        <ul className="tag-list"
             onClick={ onListClick }> 
                { tagElements }
        </ul>
    );
};

export default TagList;
