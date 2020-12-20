import React, { Component } from 'react';
import './todo-list-item.css';

import Checkbox from '../checkbox/checkbox';
import CheckStar from '../checkstar/checkstar';
import TopicTag from '../topic-tag/topic-tag';
import DeleteButton from '../delete-button/delete-button';

export default class TodoListItem extends Component {
    
    render() {
        
        return (
            <li className="list-item">
               <div className="list-item__button-group">
                   <div className="list-item__checkbox">
                        <Checkbox />
                   </div>
                   <div className="list-item__checkstar">
                        <CheckStar />
                   </div>
                  
               </div>
               <p className="list-item__text">
                   Create Awesome App
               </p>
               <div className="list-item__right-block-wrapper">
                   <div className="list-item__topic-tag">
                       <TopicTag />
                   </div>
                   <div className="list-item__delete-button">
                       <DeleteButton />
                   </div>
               </div>
            </li>
        );
    };
};