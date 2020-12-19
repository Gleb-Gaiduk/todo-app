import React, { Component } from 'react';
import './app-header.css';
import logo from './logo.png';

import UserProfile from '../user-profile/user-profile';

export default class AppHeader extends Component {
    render() {
        
        return (
            <header className="page__header header">
                <div className="header__logo-block">
                    <a className="header__logo-link" href="#0">
                        <img src={ logo } alt="Logo image"></img>
                    </a>
                </div>
                <div className="header__content">
                    <div className="header__text">
                        <span className="header__text--color--highlighted">ReactJS</span> Todo Application
                    </div>
                    <nav className="header__nav-bar">
                        <a className="header__nav-link">
                            <UserProfile />
                        </a>
                    </nav>
                </div>
            </header>
        );
    };
};