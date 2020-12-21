import React, { Component } from 'react';
import './checkstar.css';

const Checkstar = ({ onStarToggle, stared }) => {
    let starClass = "star-button";
    if (stared) starClass += ' active';
    
    return (
        <button className={ starClass }
                type="button"
                onClick={ onStarToggle }>
            <svg className="star-button__icon" id="_x31_" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m19.107 24c-.083 0-.167-.021-.242-.062l-6.865-3.795-6.866 3.795c-.167.093-.374.081-.53-.029s-.236-.3-.206-.489l1.317-8.072-5.573-5.714c-.131-.134-.176-.33-.116-.508s.213-.307.398-.335l7.683-1.174 3.44-7.33c.165-.352.74-.352.905 0l3.44 7.33 7.683 1.174c.185.028.339.158.398.335s.015.374-.116.508l-5.574 5.713 1.317 8.072c.031.189-.049.379-.206.489-.084.061-.186.092-.287.092zm-7.107-4.929c.083 0 .167.021.242.062l6.207 3.431-1.192-7.305c-.025-.157.025-.316.136-.43l5.07-5.197-6.984-1.067c-.165-.025-.306-.131-.377-.282l-3.102-6.606-3.101 6.607c-.071.151-.212.257-.377.281l-6.984 1.067 5.07 5.197c.111.114.161.273.136.43l-1.192 7.305 6.207-3.431c.074-.041.158-.062.241-.062z"/></g></g></svg>
        </button>
    )
};

export default Checkstar;