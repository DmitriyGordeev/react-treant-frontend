import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';

import tree from './tree';
import ReduxStore from './reduxStore';

function updateTreant() {

    var treantContainerSelector = ReduxStore.treeData.chart.container;
    var treantContainer = document.querySelector(treantContainerSelector);

    if(treantContainer != null) {
        new Treant(ReduxStore.treeData);
    }
}

function reducer(state = ReduxStore, action) {
    updateTreant();
    console.log("reducer fired!");
    return state;
}

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


var root = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root);

updateTreant();