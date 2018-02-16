import './tree.css';
import ReduxStore from './reduxStore';

function parse_node(element) {
    var dummy = document.createElement("div");
    dummy.innerHTML = element.innerHTML;

    var userMessage = dummy.getElementsByClassName('user-message')[0].getAttribute("value");
    var botAnswer = dummy.getElementsByClassName('bot-answer')[0].getAttribute("value");

    return {um: userMessage, ba: botAnswer};
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

    static javaTranslate_recursive(input_tree, input_element, output_element) {
        var node_data = parse_node(input_element);
        output_element.userMessage = node_data.um;
        output_element.botAnswer = node_data.ba;

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