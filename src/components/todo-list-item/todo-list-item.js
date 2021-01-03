import React, { Component } from 'react';
import './todo-list-item.css';

import Checkbox from '../checkbox/checkbox';
import CheckStar from '../checkstar/checkstar';
import TopicTag from '../topic-tag/topic-tag';
import DeleteButton from '../delete-button/delete-button';

export default class TodoListItem extends Component {
    
    state = {
        isExtendedText: false
    };
    
    extendItemText = () => {
        this.setState(({ isExtendedText }) => {
            return {
                isExtendedText: !isExtendedText
            };
        });
    };
    
    render() {
        const { itemData, tagsData, onCheckboxToggle, onStarToggle, onItemDelete } = this.props;
        const isDone = itemData.done;
        const isImportant = itemData.important;
        const isRemoved = itemData.removed;
        
        let itemClass = 'list-item';
        if (isDone) itemClass += ' done';
        if (isImportant) itemClass += ' stared';
        if (isRemoved) itemClass += ' removed';
        
        let itemTextClass= 'list-item__text';
        if (this.state.isExtendedText) itemTextClass += ' extended';
        
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
                            stared={ itemData.important } />
                   </div>
               </div>
               <p className={ itemTextClass }
                  onClick={ this.extendItemText }>
                   { itemData.text }
               </p>
               <div className="list-item__right-block-wrapper">
                   <div className="list-item__topic-tag">
                       <TopicTag
                            tagsData= { tagsData }
                            itemTag={ itemData.tag } />
                   </div>
                   <div className="list-item__delete-button">
                       <DeleteButton
                            onItemDelete = { onItemDelete } />
                   </div>
               </div>
            </span>
        );
    };
};