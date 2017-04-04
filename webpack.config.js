var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './index.js',
	},
	output: {
		path: './dist',
		filename: '[name].[chunkhash].js'
	},
	devServer: {
	   contentBase: './dist',
	   color: true,
	   historyApiFallback: true,
	   inline: true
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015-loose&cacheDirectory&plugins[]=transform-runtime'
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('This file is created by dongmei'),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			chunks: ['index'],
			hash: true
		})
	]
}