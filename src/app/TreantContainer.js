import React, { Component } from 'react';
import { connect } from 'react-redux';
import jQuery from "jquery"

import './TreantContainer.css';


function hasClass(elem, className) {
    return elem.className.toString().split(' ').indexOf(className) > -1;
}

class TreantContainer extends React.Component {

    onTreeContainerClick(event) {
        var thisObject = this;
        if(event.target !== null) {

            var nodeID = -1;
            if (hasClass(event.target, 'node-button')) {
                nodeID = event.target.parentNode.getAttribute("id");
                this.props.onNodeAddDispatcher(nodeID);
            }
            else if(hasClass(event.target, 'user-message')) {
                nodeID = event.target.parentNode.parentNode.getAttribute("id");

                // event.target.onfocus = function() { console.log("User-message onfocus"); };
                event.target.onblur = function() {
                    var inputValue = this.value;
                    thisObject.props.onNodeUpdateDispatcher(nodeID, inputValue);
                };
            }
            else if(hasClass(event.target, 'bot-answer')) {
                nodeID = event.target.parentNode.getAttribute("id");
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
        onNodeAddDispatcher: (clicked_id) => {
            dispatch({ type: 'NODE_CLICK', nodeId: clicked_id })
        },
        onNodeUpdateDispatcher: (clicked_id, inputValue) => {
            dispatch({ type: 'NODE_UPDATE', nodeId: clicked_id, value: inputValue })
        }
    })
)(TreantContainer);

