import React from 'react';
import './modal-window.css'

import NewItemForm from '../new-item-form/new-item-form';

function toggleModal() {
    const modalWindow = document.querySelector('.modal-window');
    modalWindow.classList.toggle('open');
}

const ModalWindow = ({ addListItem, addTagItem }) => {
    return (
        <div className="modal-window">
            <div className="modal-window__window">
                <div className="modal-window__back-button-wrapper">
                    <button className="modal-window__back-button"
                            type="button"
                            onClick={ toggleModal }>
                        Back
                    </button>
                </div>
                <div className="modal-window__header">
                    <h3 className="modal-window__header-title">New Item</h3>
                </div>
                <div className="modal-window__container">
                    <button className="modal-window__close-button"
                            type="button"
                            onClick={ toggleModal }>
                    </button>
                    
                    <NewItemForm
                        addListItem={ addListItem }
                        addTagItem={ addTagItem }
                        closeModal= { toggleModal } />
                </div>
            </div>
        </div>
    )
};

export { toggleModal };
export default ModalWindow;