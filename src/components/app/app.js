import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';


export default class App extends Component {
    
    render() {
        
        return (
            <div className="page">
                <AppHeader />
                <div className="page__container">
                    <div className="page__search-panel">
                        <SearchPanel />
                    </div>
                    <div className="page__sidebar">
                        
                    </div>
                    <main className="page__main">
                        
                    </main>
                    
                </div>
            </div>
        );
    };
};