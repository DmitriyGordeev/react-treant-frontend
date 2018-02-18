import React, { Component } from 'react';
import { connect } from 'react-redux';

import TreantContainer from './TreantContainer.js';

class App extends React.Component {

    saveState() { this.props.onSave(); }

    deploy() { this.props.onDeploy(); }

    render() {
        return (
            <div>
                <button onClick={ this.saveState.bind(this) }>Save</button>
                <button onClick={ this.deploy.bind(this) }>Deploy</button>
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
        },
        onDeploy: () => {
            dispatch({ type: 'DEPLOY_STATE' })
        }
    })
)(App);