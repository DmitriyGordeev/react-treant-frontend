import './tree.css';
import ReduxStore from './reduxStore';

class TreeTraverse  {

    static find_recursive(entry, element_id) {
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
    }

    static findNode(tree, element_id) {
        return this.find_recursive(tree.nodeStructure, element_id);
    }

    static addNode(tree, parent_id, nodeObject, nodeId) {
        if(nodeObject == null) {
            return null;
        }

        var parentObject = this.findNode(tree, parent_id);
        if(parentObject == null) {
            return null;
        }

        nodeObject.HTMLid = nodeId;
        parentObject.children.push(nodeObject);
        return nodeObject;
    }
}

export default TreeTraverse;