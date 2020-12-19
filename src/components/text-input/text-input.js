import React from 'react';
import './text-input.css';

const TextInput = ({ placeholder }) => {
    return (
        <input
            className="text-input"
            type="text"
            placeholder={ placeholder }>
        </input>
    );
};

export default TextInput;