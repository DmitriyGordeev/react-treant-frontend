import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends React.Component {

    nodeClick() {
        // call "this.props.onNodeClick()" inside node.onclick = function() {}
    }

    render() {
        return (
            <div id={"tree-container"}></div>
        );
    }
}


export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({
        onNodeCLick: () => {
            dispatch({ type: 'ACTION_TYPE' })
        }
    })
)(App);

