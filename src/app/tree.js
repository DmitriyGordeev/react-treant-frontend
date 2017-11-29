import './tree.css';
import ReduxState from './reduxState';

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
        return this.find_recursive(this.treeData.nodeStructure, element_id);
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
    treeData: ReduxState.treeData,
    size: 1
};

export default TreeContent;