import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import tree from './tree';

ReactDOM.render(<App />, document.getElementById("app"));
var chart = new Treant(tree);