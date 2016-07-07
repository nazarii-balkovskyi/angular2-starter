var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const SERVER_PORT = 3000;
const HOST_NAME = 'localhost';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    debug: true,

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://' + HOST_NAME + ':' + SERVER_PORT + '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].[hash].css')
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: '.',
        stats: 'minimal',
        port: SERVER_PORT,
        outputPath: helpers.root('dist')
    },
    node: {
        global: 'window',
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
});