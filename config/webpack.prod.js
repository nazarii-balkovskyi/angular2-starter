const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const WebpackMd5Hash = require('webpack-md5-hash');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
		sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },

	htmlLoader: {
		minimize: false
		// removeAttributeQuotes: false,
		// caseSensitive: true,
		// customAttrSurround: [
		//   [/#/, /(?:)/],
		//   [/\*/, /(?:)/],
		//   [/\[?\(?/, /(?:)/]
		// ],
		// customAttrAssign: [/\)?\]?=/]
	},

    plugins: [
		new WebpackMd5Hash(),
        new webpack.NoErrorsPlugin(),//stops the build if there is any error
        new webpack.optimize.DedupePlugin(),//detects identical (and nearly identical) files and removes them from the output
        new webpack.optimize.UglifyJsPlugin({//minifies the bundles
			beautify: false, //prod

			mangle: {
				screw_ie8 : true,
				keep_fnames: true
			}, //prod
			compress: {
				screw_ie8: true,
				warnings: false
			}, //prod
			comments: false //prod
		}),
        new ExtractTextPlugin('[name].[chunkhash].css'),//extracts embedded css as external files, adding cache-busting hash to the filename
        new webpack.DefinePlugin({//use to define environment variables that we can reference within our application
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ],
	tslint: {
		emitErrors: true,
		failOnHint: true,
		resourcePath: 'src'
	},
	/*
	* Include polyfills or mocks for various node stuff
	* Description: Node configuration
	*
	* See: https://webpack.github.io/docs/configuration.html#node
	*/
	node: {
		global: 'window',
		crypto: 'empty',
		process: false,
		module: false,
		clearImmediate: false,
		setImmediate: false
	}
});
