var path = require('path');
var packageData = require('./package.json');
var filename = [packageData.name, packageData.version, 'js'];

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');



var plugins = [
    new HtmlWebpackPlugin({
      inject: 'head',
      template: 'index.html',
      minify: {
        "collapseWhitespace": true, 
        "removeComments": true, 
        "removeRedundantAttributes": true, 
        "removeScriptTypeAttributes": true, 
        "removeStyleLinkTypeAttributes": true
      }
    }),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
          {from: 'assets', to: 'assets'}
      ])
  ];

module.exports = {
    entry: {
      main: [
        path.resolve(__dirname, packageData.main)
      ]
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.'),
    },
    devtool: 'source-map',
    plugins: plugins,
    module: {
      loaders: [
        { 
            test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
          }
      ]
    }

};