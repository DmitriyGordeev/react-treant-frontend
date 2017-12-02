import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';


function hasClass(elem, className) {
    return elem.className.toString().split(' ').indexOf(className) > -1;
}

class App extends React.Component {

    onTreeContainerClick(event) {
        if(event.target !== null) {
            if (hasClass(event.target, 'node-button')) {
                var nodeId = event.target.parentNode.getAttribute("id");
                this.props.onNodeClickDispatcher(nodeId);
            }
        }
    }

    render() {
        return (
            <div id={"tree-container"} onClick={this.onTreeContainerClick.bind(this)}> </div>
        );
    }
}


export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({
        onNodeClickDispatcher: (clicked_id) => {
            dispatch({ type: 'NODE_CLICK', nodeId: clicked_id })
        }
    })
)(App);

