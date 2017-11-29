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

    find_recursive(entry, element_id) {
        if(entry.name === value) {
            return entry;
        }

        for(var i = 0; i < entry.massive.length; i++) {
            var found = find_recursive(entry.massive[i], element_id);
            if(found != null) {
                if (found.name === element_id) {
                    return found;
                }
            }
        }

        return null;
    },
    findNode: function(element_id) {
        return find_recursive(chart_config, element_id);
    },
    addNode:  function(parent_id, nodeObject) {
        if(nodeObject == null) {
            return null;
        }

        var parentObject = findNode(parent_id);
        if(parentObject == null) {
            return null;
        }

        parentObject.children.push(nodeObject);
        return nodeObject;
    },
    treeData: chart_config
};

export default TreeContent;