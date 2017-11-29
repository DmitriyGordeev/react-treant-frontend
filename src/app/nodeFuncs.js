
// export default function nodeClick() {
//     jQuery(".big-commpany .node-button").click(function() {
//         var clickedNode = jQuery(this).closest(".big-commpany");
//         var clickedNode_id = clickedNode.attr("id");
//         var node = {
//             HTMLid: "0",
//             innerHTML:
//             "<p class='node-name'>Hey, fuck off!</p>" +
//             "<i class=\"material-icons node-button\">add</i>",
//             connectors: {
//                 style: {
//                     'stroke': '#bbb',
//                     'arrow-end': 'oval-wide-long'
//                 }
//             },
//             children: [],
//         };
//
//         tree.addNode(clickedNode_id, node);
//
//
//         console.log(tree.treeData);
//     });
// }

import tree from './tree';
import ReduxState from './reduxState';

function onNodeClickEvent() {
    var nodeObject = {
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
        children: []
    };
    tree.treeData.nodeStructure.children.push(nodeObject);
    console.log("redux state:", ReduxState.treeData.nodeStructure.children.length);
}

export default function onNodeClick() {

    var nodes = document.querySelectorAll(".big-commpany");
    nodes.forEach(function(item, i, arr) {
        item.onclick = onNodeClickEvent;
    });

}