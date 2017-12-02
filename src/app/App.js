import React, { Component } from 'react';
import { connect } from 'react-redux';

import TreantContainer from './TreantContainer.js';

class App extends React.Component {

    render() {
        return (
            <TreantContainer/>
        )
    }
}

export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({})
)(App);