import React, { Component } from 'react';
import { connect } from 'react-redux';

import TreantContainer from './TreantContainer.js';

class App extends React.Component {

    getNodeValues() {

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
    dispatch => ({
        onGetInputs: (inputsArray) => {
            dispatch({ type: 'GET_INPUTS', inputsArray: inputsArray })
        }
    })
)(App);