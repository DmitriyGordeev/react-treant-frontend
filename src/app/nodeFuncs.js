import tree from './tree';

export default function nodeClick() {
    jQuery(".big-commpany .node-button").click(function() {
        var clickedNode = jQuery(this).closest(".big-commpany");
        var clickedNode_id = clickedNode.attr("id");
        var node = {
            HTMLid: "0",
            innerHTML:
            "<p class='node-name'>Hey, fuck off!</p>" +
            "<i class=\"material-icons node-button\">add</i>",
            connectors: {
                style: {
                    'stroke': '#bbb',
                    'arrow-end': 'oval-wide-long'
                }
            },
            children: [],
        };
        
        tree.addNode(clickedNode_id, node);


        console.log(tree.treeData);
    });
}