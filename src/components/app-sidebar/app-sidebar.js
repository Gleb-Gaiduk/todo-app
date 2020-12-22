import React from 'react';
import './app-sidebar.css';

import { toggleModal } from '../modal-window/modal-window';

const AppSidebar = () => {
    
    return (
        <aside className="sidebar">
            <div className="sidebar__button-wrapper">
                <button className="sidebar__button"
                type="button"
                data-modal="open"
                onClick={ toggleModal }>New Task</button>
            </div>
                <ul className="sidebar__tag-list">
                    <li className="sidebar__tag-list-item">
                        <span className="sidebar__tag-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </span>
                        <span className="sidebar__tag-text">All</span>
                    </li>
                    <li className="sidebar__tag-list-item">
                        <span className="sidebar__tag-icon topic-tag--bg--blue"></span>
                        <span className="sidebar__tag-text">Friends</span>
                    </li>
                    <li className="sidebar__tag-list-item">
                        <span className="sidebar__tag-icon topic-tag--bg--red"></span>
                        <span className="sidebar__tag-text">Work</span>
                    </li>
                    <li className="sidebar__tag-list-item">
                        <span className="sidebar__tag-icon topic-tag--bg--green"></span>
                        <span className="sidebar__tag-text">Sport</span>
                    </li>
                    <li className="sidebar__tag-list-item">
                        <span className="sidebar__tag-icon topic-tag--bg--purple"></span>
                        <span className="sidebar__tag-text">Coding</span>
                    </li>
                </ul>
        </aside>
    )
}

export default AppSidebar;