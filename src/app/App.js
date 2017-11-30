import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';


function hasClass(elem, className) {
    return elem.className.toString().split(' ').indexOf(className) > -1;
}

class App extends React.Component {

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
        console.log(this.props.storeData.treeData.nodeStructure.children.length);
    }

    onTreeContainerClick(event) {
        if(event.target !== null) {
            if (hasClass(event.target, 'big-commpany')) {
                this.props.onNodeClickDispatcher();
            }
        }
    }


    render() {
        return (
            <div id={"tree-container"} onClick={this.onTreeContainerClick.bind(this)}> </div>
        );
    }
}


export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({
        onNodeClickDispatcher: () => {
            dispatch({ type: 'NODE_CLICK' })
        }
    })
)(App);

