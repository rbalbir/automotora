const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		index: './public/index.html'
	},
	mode: 'development',
	devServer: {
		port: 31416,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js(x)?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: { presets: ['env', 'react'] },
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
			{
				test: /\.(ttf|otf)$/,
				use: ['url-loader?limit=100000'],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: '[name].js',
		publicPath: '/',
	},
	plugins: [
		
	],
};

