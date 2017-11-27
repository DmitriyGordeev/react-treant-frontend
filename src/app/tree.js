var chart_config = {
    chart: {
        container: "#tree-container",
        levelSeparation: 45,
        rootOrientation: "WEST",
        nodeAlign: "BOTTOM",
        connectors: {
            type: "curve",
            style: {
                "stroke-width": 2
            }
        },
        node: {
            HTMLclass: "big-commpany"
        }
    },

    nodeStructure: {
        text: { name: "CEO" },
        connectors: {
            style: {
                'stroke': '#bbb',
                'arrow-end': 'oval-wide-long'
            }
        },
        children: [
            {
                text: { name: "Account" },
                stackChildren: true,
                connectors: {
                    style: {
                        'stroke': '#8080FF',
                        'arrow-end': 'block-wide-long'
                    }
                },
                children: [
                    {
                        text: {name: "Receptionist"},
                        HTMLclass: "reception"
                    },
                    {
                        text: {name: "Author"}
                    },
                    {
                        text: {name: "JohnDoe"},
                        children: [
                            {
                                text: {name: "JaneDoe"}
                            },
                            {
                                text: {name: "SomeBodyImportant"}
                            }
                        ]
                    },

                ]
            },
            {
                text: { name: "Developer" },
                stackChildren: true,
                connectors: {
                    style: {
                        'stroke': '#8080FF',
                        'arrow-end': 'block-wide-long'
                    }
                },
                children: [
                ]
            }
        ]
    }
};

export default chart_config;