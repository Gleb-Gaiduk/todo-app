import React, { Component } from 'react';
import './app-sidebar.css';

import { toggleModal } from '../modal-window/modal-window';
import TagList from '../tag-list/tag-list';


export default class AppSidebar extends Component {
   
    state = {
        isOpened: null
    };
    
    componentDidMount() {
        const { isOpened } = this.props;
        this.getOpenStatus(isOpened);
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.isOpened !== prevProps.isOpened) {
            this.updateOpenStatus();
        }
    };
    
    getOpenStatus = (isOpened) => {
        this.setState({
            isOpened: isOpened
        });
    };
    
    updateOpenStatus = () => {
        this.setState(({ isOpened }) => {
            return {
                isOpened: !isOpened
            };
        });
    };
    
    render() {
        console.log(this.state.isOpened);
        
        const { setFilterTagValue, tagsData } = this.props;
        let openClass = ' open';
        
        if (!this.state.isOpened) {
            openClass = '';
        }
        
        return (
            <aside className={ `sidebar${openClass}` }>
                <div className="sidebar__button-wrapper">
                    <button className="sidebar__button"
                        type="button"
                        data-modal="open"
                        onClick={ toggleModal }>New Task
                    </button>
                </div>
                <TagList
                    setFilterTagValue={ setFilterTagValue }
                    tagsData={ tagsData }/>
            </aside>
        )
    }
};