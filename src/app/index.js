import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';

import tree from './tree';
import ReduxStore from './reduxStore';
import nodeF from './nodeFuncs';


function reducer(state = ReduxStore, action) {
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

var chart = new Treant(tree.treeData);
nodeF();
