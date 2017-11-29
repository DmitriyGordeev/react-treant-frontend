import './tree.css';

var chart_config = {
    chart: {
        container: "#tree-container",
        levelSeparation: 45,
        rootOrientation: "WEST",
        nodeAlign: "BOTTOM",
        connectors: {
            type: "curve",
            style: {
                "stroke-width": 2
            }
        },
        node: {
            HTMLclass: "big-commpany"
        }
    },
    nodeStructure: {
        innerHTML:
            "<p class='node-name'>Start</p>" +
            "<i class=\"material-icons node-button\">add</i>",
        connectors: {
            style: {
                'stroke': '#bbb',
                'arrow-end': 'oval-wide-long'
            }
        },
        HTMLid: "0",
        children: [],
    }
};

var TreeContent = {
    findNode: function() {

    },
    addNode:  function(parent_id) {

    },
    treeData: chart_config
};

export default TreeContent;