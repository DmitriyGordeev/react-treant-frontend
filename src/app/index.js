import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

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

    var next_state = state;

    if(action.type === 'NODE_ADD') {
        next_state.nodeCounter++;

        var nodeObject = {
            HTMLid: next_state.nodeCounter.toString(),
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
        TreeTraverse.addNode(next_state.treeData, action.nodeId, nodeObject);
        updateTreant(next_state);
        return next_state;
    }
    else if(action.type === 'GET_INPUTS') {
    }
    else if(action.type === 'NODE_UPDATE') {

        var node_ref = TreeTraverse.findNode(next_state.treeData, action.nodeId);

        if(node_ref !== null) {
            var dummy = document.createElement("div");
            dummy.innerHTML = node_ref.innerHTML;

            if(action.isUserMessage) {
                dummy.getElementsByClassName('user-message')[0].setAttribute("value", action.value);
            }
            else {
                dummy.getElementsByClassName('bot-answer')[0].setAttribute("value", action.value);
            }

            node_ref.innerHTML = dummy.innerHTML;
        }
    }
    else if(action.type === 'SAVE_STATE') {
        var json_string = JSON.stringify(next_state, null, '\t');
        jQuery.post("mock_backend.php", json_string);

        // TODO: translate trean-like json into java-json and send to another php script
        var java_tree = TreeTraverse.javaTranslate(next_state);
        console.log("java_tree", java_tree);
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