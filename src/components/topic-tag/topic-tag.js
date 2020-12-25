import React, { Component } from 'react';
import './topic-tag.css';
import '../common-styles/tag-color.css';

const TopicTag = ( { itemTag, tagsData } ) => {
    
    function getTagClassName(tagText, tagsData) {
        let baseClass = 'topic-tag ';
        const tagElement = tagsData.find(item => item.tag.toLowerCase() === tagText.toLowerCase());
        return baseClass += `background--${ tagElement.color }`;
    }
    
    return (
        <div className={ getTagClassName(itemTag, tagsData) }>
            { itemTag }
        </div>
    );
};

export default TopicTag;