import './tree.css';
import ReduxStore from './reduxStore';

function parseUserMessage() {

}

function parseBotAnswer() {

}


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
        if(parentObject == null) {
            return null;
        }

        parentObject.children.push(nodeObject);
        return nodeObject;
    }

    // TODO: static eraseNode(...) {}

    // TODO: refactor this (iterator ?)
    static javaTranslate_recursive(input_tree, input_element, output_element) {

        // TODO: parse data here
        output_element.HTMLid = input_element.HTMLid;

        output_element.nodes = [];
        if(input_element.children.length === 0) {
            return output_element;
        }

        for(var i = 0; i < input_element.children.length; i++) {
            output_element.nodes.push({});
            TreeTraverse.javaTranslate_recursive(input_tree, input_element.children[i], output_element.nodes[i]);
        }

    }

    static javaTranslate(tree) {
        var output_tree = {
            HTMLid: "",
            nodes: []
        };

        TreeTraverse.javaTranslate_recursive(tree, tree.treeData.nodeStructure, output_tree);
        return output_tree;
    }
}

export default TreeTraverse;