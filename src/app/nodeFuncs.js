import tree from './tree';

export default function nodeClick() {
    jQuery(".big-commpany .node-button").click(function() {
        tree.findNode();
    });
}