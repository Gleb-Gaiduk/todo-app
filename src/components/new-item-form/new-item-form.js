import React, { Component } from 'react';
import './new-item-form.css';
import '../text-input/text-input.css';

export default class NewItemForm extends Component {
    
    state = {
        taskLabel: '',
        tagLabel: 'Not taged'
    };
    
    onTaskLableChange = (event) => {
        this.setState({
            taskLabel: event.target.value
        });
    };
    
    onTagLableChange = (event) => {
        this.setState({
            tagLabel: event.target.value
        });
    };
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addListItem(this.state.taskLabel, this.state.tagLabel);
        this.props.addTagItem(this.state.tagLabel);
        this.props.closeModal();
        this.clearInputs();
    }
    
    clearInputs() {
        const inputFiels = document.querySelectorAll('[data-input="new-item"]');
        inputFiels.forEach(item => item.value = '');
    }
    
    render() {
        const { taskLabel, tagLabel } = this.state;
        return (
            <form className="new-item-form"
                  onSubmit={ this.onFormSubmit }>
                <div className="new-item-form__group-row">
                    <label className="new-item-form__label">Task title</label>
                    <input className="new-item-form__input text-input"
                           type="text"
                           data-input="new-item"
                           onChange={ this.onTaskLableChange }
                          />
                </div>
                <div className="new-item-form__group-row">
                    <label className="new-item-form__label">Task tag</label>
                    <input className="new-item-form__input text-input"
                           type="text"
                           data-input="new-item"
                           onChange={ this.onTagLableChange }
                           />
                </div>
                <div className="new-item-form__button-wrapper">
                    <button className="new-item-form__button" type="submit">Create</button>
                </div>
            </form>
        );
    };
};
