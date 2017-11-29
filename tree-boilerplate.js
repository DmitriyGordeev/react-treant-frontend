// var tree = {
//     chart: {
//         container: "#tree-container",
//         levelSeparation: 45,
//         rootOrientation: "WEST",
//         nodeAlign: "BOTTOM",
//         connectors: {
//             type: "curve",
//             style: {
//                 "stroke-width": 2
//             }
//         },
//         node: {
//             HTMLclass: "big-commpany"
//         }
//     },
//     nodeStructure: {
//         innerHTML:
//         "<p class='node-name'>Start</p>" +
//         "<i class=\"material-icons node-button\">add</i>",
//         connectors: {
//             style: {
//                 'stroke': '#bbb',
//                 'arrow-end': 'oval-wide-long'
//             }
//         },
//         HTMLid: "0",
//         children: [],
//     }
// };

var object = {
    name: "A",
    massive: [
        {
            name: "K",
            massive: [
                {
                    name: "F",
                    massive: []
                },
            ]
        },
        {
            name: "E",
            massive: []
        },
        {
            name: "D",
            massive: []
        }
    ]
};


function find_recursive(element, value) {

    if(element.name === value) {
        return element;
    }

    for(var e in element.massive) {
        return find_recursive(e, value);
    }
}

var searched = find_recursive(object, "F");
console.log(searched);

// console.log(object.massive.find(function(element, index, array) { return (element.name === "E"); }));