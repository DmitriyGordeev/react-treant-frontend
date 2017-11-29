import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends React.Component {

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
        onMethod: () => {
            dispatch({ type: 'ACTION_TYPE' })
        }
    })
)(App);

