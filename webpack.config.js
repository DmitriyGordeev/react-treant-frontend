var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "build");
var SRC_DIR  = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",

    output: {
        path: BUILD_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },

    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ],
    }

};

module.exports = config;