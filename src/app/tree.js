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
};

var TreeContent = {

    find_recursive(entry, element_id) {
        if(entry.name === element_id) {
            return entry;
        }

        for(var i = 0; i < entry.children.length; i++) {
            var found = find_recursive(entry.children[i], element_id);
            if(found != null) {
                if (found.name === element_id) {
                    return found;
                }
            }
        }

        return null;
    },
    findNode: function(element_id) {
        return this.find_recursive(chart_config.nodeStructure, element_id);
    },
    addNode:  function(parent_id, nodeObject) {
        if(nodeObject == null) {
            return null;
        }

        var parentObject = this.findNode(parent_id);
        if(parentObject == null) {
            return null;
        }

        nodeObject.HTMLid = size.toString();
        parentObject.children.push(nodeObject);
        this.size++;
        return nodeObject;
    },
    treeData: chart_config,
    size: 1
};

export default TreeContent;