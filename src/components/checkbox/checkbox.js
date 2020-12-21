import React, { Component } from 'react';
import './checkbox.css';

export default class Checkbox extends Component {
    
    render() {
        const { itemId, onCheckboxToggle } = this.props;
        return (
            <div className="checkbox">
                <input type="checkbox"
                       id={ itemId }
                       onClick={ onCheckboxToggle }/>
                <label htmlFor={ itemId }></label>
            </div>
        );
    };
};