import React, { Component } from 'react';
import './user-profile.css';

import avatar from './avatar.jpg';
export default class UserProfile extends Component {
    render() {
        
        return (
            <div className="user-profile">
                <span className="user-profile__name">Hleb Haiduk</span>
                <figure className="user-profile__avatar">
                    <img className="user-profile__image" src={ avatar } />
                </figure>
            </div>
        );
    };
};