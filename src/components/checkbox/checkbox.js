import React, { Component } from 'react';
import './checkbox.css';

export default class Checkbox extends Component {
    
    render() {
        
        return (
            <div>
                <input type="checkbox" id="test1" />
                <label htmlFor="test1"></label>
            </div>
            
        )
    }
};