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

    for(var i = 0; i < element.massive.length; i++) {
        var found = find_recursive(element.massive[i], value);
        if(found != null) {
            if (found.name === value) {
                return found;
            }
        }
    }

    return null;
}

var searched = find_recursive(object, "D");
searched.massive.push({
    name: "L",
    massive: []
});

console.log(object);

// console.log(object.massive.find(function(element, index, array) { return (element.name === "E"); }));