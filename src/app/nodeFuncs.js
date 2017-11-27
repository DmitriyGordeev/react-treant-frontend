export default function nodeClick() {
    jQuery(".big-commpany").click(function() {
        alert(jQuery(this).find(".node-name").text());
    });
}