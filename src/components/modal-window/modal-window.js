import React from 'react';
import './modal-window.css'

function toggleModal() {
    const modalWindow = document.querySelector('.modal-window');
    const openButtons = document.querySelectorAll('[data-modal="open"]');
    modalWindow.classList.toggle('open');
}

const ModalWindow = () => {
    return (
        <div className="modal-window">
            <div className="modal-window__window">
                <div className="modal-window__back-button-wrapper">
                    <button className="modal-window__back-button"
                            data-modal="close" 
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
                            data-modal="close"
                            onClick={ toggleModal }>
                    </button>
                    
                    <div className="case-form__button-wrapper">
                        <button type="button">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { toggleModal };
export default ModalWindow;