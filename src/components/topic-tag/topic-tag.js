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
        default:
            return baseClass += 'topic-tag--bg--green';
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