import React, { Component } from 'react';
import './topic-tag.css';

function getTagClassName(tagText) {
    let baseClass = 'topic-tag ';
    switch(tagText) {
        case 'Friends':
            return baseClass += 'topic-tag--bg--blue';
        case 'Work':
            return baseClass += 'topic-tag--bg--red';
        case 'Coding':
            return baseClass += 'topic-tag--bg--purple';
        case 'Social':
            return baseClass += 'topic-tag--bg--orange';
        case 'Sport':
            return baseClass += 'topic-tag--bg--green';
        case 'Not taged':
            return baseClass += 'topic-tag--bg--default';
        default:
            return baseClass += 'topic-tag--bg--dark-green';
    }
}

const TopicTag = ( { itemTag } ) => {
    return (
        <div className={ getTagClassName(itemTag) }>
            { itemTag }
        </div>
    );
};

export default TopicTag;