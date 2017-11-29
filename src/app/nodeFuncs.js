import tree from './tree';

export default function nodeClick() {
    jQuery(".big-commpany .node-button").click(function() {
        var node = jQuery(this).closest(".big-commpany");
        console.log("node.id", node.attr("id"));
    });
}