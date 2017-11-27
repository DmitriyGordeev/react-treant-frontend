import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import tree from './tree';
import jqalert from './some-jq';

ReactDOM.render(<App />, document.getElementById("app"));
var chart = new Treant(tree);
jqalert();
