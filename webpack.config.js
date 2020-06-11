var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: "development",//or production
    entry: "./src/index.js",
    output: {
        filename: "[index].[contenthash].js"
    },
    plugins: [new HtmlWebpackPlugin({
        title: "suno",
        template: "src/assets/index.html"
    })]
};