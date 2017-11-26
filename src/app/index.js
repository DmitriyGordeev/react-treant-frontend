import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';


const simple_chart_config = {
    chart: {
        container: "#tree-simple"
    },

    nodeStructure: {
        text: { name: "Parent node" },
        children: [
            {
                text: { name: "First child" }
            },
            {
                text: { name: "Second child" }
            }
        ]
    }
};


ReactDOM.render(<App />, document.getElementById("app"));

