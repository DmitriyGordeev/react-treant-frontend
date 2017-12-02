import React, { Component } from 'react';
import { connect } from 'react-redux';

import TreantContainer from './TreantContainer.js';

class App extends React.Component {

    getNodeValues() {
        var inputStateObject = [];
        var treantNodes = document.querySelectorAll(".bot-state-node > .node-input");

        for(var i = 0; i < treantNodes.length; i++) {
            inputStateObject.push(treantNodes[i].querySelector(".user-message").value);
        }

        console.log(inputStateObject);
    }

    render() {
        return (
            <div>
                <button onClick={this.getNodeValues.bind(this)}>Get Values</button>
                <TreantContainer/>
            </div>
        )
    }
}

export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({})
)(App);