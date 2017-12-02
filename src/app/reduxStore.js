var state = {
    nodeCounter: 0,
    treeData: {
        chart: {
            container: "#tree-container",
            levelSeparation: 45,
            rootOrientation: "WEST",
            nodeAlign: "BOTTOM",
            scrollbar: "native",
            connectors: {
                type: "curve",
                style: {
                    "stroke-width": 2
                }
            },
            node: {
                HTMLclass: "bot-state-node"
            }
        },
        nodeStructure: {
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
            children: [],
        }
    },
    treantInstance: null



};

export default state;