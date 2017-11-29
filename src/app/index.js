import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import tree from './tree';
import nodeF from './nodeFuncs';

ReactDOM.render(<App />, document.getElementById("app"));
var chart = new Treant(tree.treeData);

nodeF();
