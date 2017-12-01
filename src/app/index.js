import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';
import './tree.css';

import ReduxStore from './reduxStore';
import TreeTraverse from './tree';

/* --------------------------------------------- */

function cleanTreeViewport(treantContainer, nodeHtmlClass) {
    if(treantContainer != null) {
        var treantNodes = treantContainer.querySelectorAll("." + nodeHtmlClass);
        for(var i = 0; i < treantNodes.length; i++) {
            treantNodes[i].remove();
        }
    }
}

function updateTreant(state) {

    var treantContainerSelector = state.treeData.chart.container;
    var treantNodeClass = state.treeData.chart.node.HTMLclass;
    var treantContainer = document.querySelector(treantContainerSelector);

    if(treantContainer != null) {
        cleanTreeViewport(treantContainer, treantNodeClass);
        new Treant(state.treeData);
    }


}

function reducer(state = ReduxStore, action) {

    if(action.type === 'NODE_CLICK') {
        var newState = state;
        newState.nodeCounter++;

        var nodeObject = {
            HTMLid: newState.nodeCounter.toString(),
            innerHTML:
            "<p class='node-name'>Start</p>" +
            "<i class=\"material-icons node-button\">add</i>",
            connectors: {
                style: {
                    'stroke': '#bbb',
                    'arrow-end': 'oval-wide-long'
                }
            },
            children: []
        };

        // nodeStructure -> appropriate child:
        newState.treeData.nodeStructure.children.push(nodeObject);
        updateTreant(newState);
        return newState;
    }

    updateTreant(state);
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

updateTreant(ReduxStore);