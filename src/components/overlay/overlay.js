import React, { Component } from 'react';
import './overlay.css';

export default class Overlay extends Component {
    
    state = {
        isHidden: true
    };
    
    componentDidMount() {
        const { isHidden } = this.props;
        this.setState({ isHidden });
    };
    
    componentDidUpdate(prevProps) {
        if (this.props.isHidden !== prevProps.isHidden ) {
            this.updateHiddenStatus();
        }
    };
    
    updateHiddenStatus = () => {
        this.setState(({ isHidden }) => {
            return {
                isHidden: !isHidden
            };
        });
    };
    
    render() {
        let openClass = ' open';
        
        if (this.state.isHidden) {
            openClass = '';
        }
        
        return (
            <div className={ `overlay${openClass}` }
                 onClick={ this.props.onOverlayClick }>
            </div>
        )
    };
};