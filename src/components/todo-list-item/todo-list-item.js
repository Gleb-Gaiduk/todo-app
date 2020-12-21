import React, { Component } from 'react';
import './todo-list-item.css';

import Checkbox from '../checkbox/checkbox';
import CheckStar from '../checkstar/checkstar';
import TopicTag from '../topic-tag/topic-tag';
import DeleteButton from '../delete-button/delete-button';

export default class TodoListItem extends Component {
    
    render() {
        const { itemData, onCheckboxToggle, onStarToggle } = this.props;
        let itemClass = 'list-item';
        if (itemData.done) itemClass += ' done';
        if (itemData.important) itemClass += ' stared';
        
        return (
            <span className={ itemClass }>
               <div className="list-item__button-group">
                   <div className="list-item__checkbox">
                        <Checkbox
                        itemId={ itemData.id }
                        onCheckboxToggle={ onCheckboxToggle } />
                   </div>
                   <div className="list-item__checkstar">
                        <CheckStar
                        onStarToggle={ onStarToggle }
                        stared={ itemData.important }/>
                   </div>
               </div>
               <p className="list-item__text">
                   { itemData.text }
               </p>
               <div className="list-item__right-block-wrapper">
                   <div className="list-item__topic-tag">
                       <TopicTag
                       itemTag={ itemData.tag } />
                   </div>
                   <div className="list-item__delete-button">
                       <DeleteButton />
                   </div>
               </div>
            </span>
        );
    };
};