import React, { Component } from 'react';
import { connect } from 'react-redux';

import TreantContainer from './TreantContainer.js';

class App extends React.Component {

    saveState() { this.props.onSave(); }

    render() {
        return (
            <div>
                <button onClick={ this.saveState.bind(this) }>Save</button>
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
        onSave: () => {
            dispatch({ type: 'SAVE_STATE'  })
        }
    })
)(App);