import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';
import './tree.css';

import ReduxStore from './reduxStore';
import TreeTraverse from './TreeTraverse';

/* --------------------------------------------- */

function cleanTreeViewport(treantContainer, nodeHtmlClass) {
    if(treantContainer != null) {

        // clean adding of same class on ever redraw:
        var containerClass = treantContainer.getAttribute("class");
        if(containerClass != null) {
            containerClass = containerClass.replace(" Treant Treant-loaded", "");
            treantContainer.setAttribute("class", containerClass);
        }


        var treantNodes = treantContainer.querySelectorAll("." + nodeHtmlClass);
        for(var i = 0; i < treantNodes.length; i++) {
            treantNodes[i].remove();
        }
        var svgElement = treantContainer.querySelector("svg");
        if(svgElement != null) {
            svgElement.remove();
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
            "<div class=\"node-input\">" +
            "  <input class='user-message' type=\"text\" placeholder=\"user message\"/>" +
            "  <input class='bot-answer' type=\"text\" placeholder=\"bot answer\"/>" +
            "</div>" +
            "<i class=\"material-icons node-button\">add</i>",
            connectors: {
                style: {
                    'stroke': '#bbb',
                    'arrow-end': 'oval-wide-long'
                }
            },
            children: []
        };
        TreeTraverse.addNode(newState.treeData, action.nodeId, nodeObject);

        updateTreant(newState);
        return newState;
    }
    else if(action.type === 'GET_INPUTS') {
        console.log("inputs array: ", action.inputsArray);
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