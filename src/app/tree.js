import './tree.css';
import ReduxStore from './reduxStore';

class TreeTraverse  {

    static find_recursive(entry, element_id) {
        if(entry.HTMLid === element_id) {
            return entry;
        }

        for(var i = 0; i < entry.children.length; i++) {
            var found = TreeTraverse.find_recursive(entry.children[i], element_id);
            if(found != null) {
                if (found.HTMLid === element_id) {
                    return found;
                }
            }
        }

        return null;
    }

    static findNode(tree, element_id) {
        return TreeTraverse.find_recursive(tree.nodeStructure, element_id);
    }

    static addNode(tree, parent_id, nodeObject) {
        if(nodeObject == null) {
            return null;
        }


        var parentObject = TreeTraverse.findNode(tree, parent_id);
        console.log("addNode() : parent_id = ", parent_id);
        console.log("addNode() : parentObject = ", parentObject);
        if(parentObject == null) {
            return null;
        }


        parentObject.children.push(nodeObject);
        return nodeObject;
    }
}

export default TreeTraverse;