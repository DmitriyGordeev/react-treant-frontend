import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';


class App extends React.Component {

    constructor() {
        super();
        this.onNodeClick();
    }

    onNodeClickEvent() {

        var nodeObject = {
            HTMLid: "0",
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
        this.props.storeData.treeData.nodeStructure.children.push(nodeObject);
        this.props.onNodeClickDispatcher();
    }

    onNodeClick() {

        var nodes = document.querySelectorAll(".big-commpany");
        nodes.forEach(function(item, i, arr) {
            item.onclick = this.onNodeClickEvent;
        });
    }

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
        onNodeClickDispatcher: () => {
            dispatch({ type: 'ACTION_TYPE' })
        }
    })
)(App);

