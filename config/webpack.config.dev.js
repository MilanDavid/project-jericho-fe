const { resolve }      = require('path');
const baseConfig       = require('./webpack.config.prod.js');
const webpackMerge     = require('webpack-merge');
const webpack          = require('webpack');
const webpackNotifier  = require('webpack-notifier');
const result                  = require('dotenv').config({path:resolve(__dirname, '../.env')}).parsed;
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');


module.exports = webpackMerge(baseConfig, {

    output: {
        // necessary for HMR to know where to load the hot update chunks
        publicPath: 'http://localhost:8080/'
    },
    mode: "development",
    devServer: {
        // enable HMR on the server
        hot: true,
        inline: false,
        contentBase: resolve(__dirname,'../public'),
        publicPath: 'http://localhost:8080/',
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackHarddiskPlugin(),

        // Send Notifications when error or build
        new webpackNotifier(),

        // prints more readable module names in the browser console on HMR updates,
        new webpack.NamedModulesPlugin(),
    ]
});
