import React from 'react';
import './app-sidebar.css';

import { toggleModal } from '../modal-window/modal-window';
import TagList from '../tag-list/tag-list';


const AppSidebar = ({ setFilterTagValue, tagsData }) => {
    
   
    
    return (
        <aside className="sidebar">
            <div className="sidebar__button-wrapper">
                <button className="sidebar__button"
                type="button"
                data-modal="open"
                onClick={ toggleModal }>New Task</button>
            </div>
            <TagList
                setFilterTagValue={ setFilterTagValue }
                tagsData={ tagsData }/>
        </aside>
    )
}

export default AppSidebar;