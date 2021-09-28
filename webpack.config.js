const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: './src/main.js',
	},
	output: {
		path: resolve(__dirname, '../dist'),
		filename: 'static/[name]-[contenthash].js',
		clean: true,
	},
	target: 'web',
	mode: 'development',
	module: {
		rules: [
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.css$/, use: [CssExtractPlugin.loader, 'css-loader'] },
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new CssExtractPlugin({ filename: 'static/[name]-[contenthash].css' }),
		new HtmlWebpackPlugin(),
	],
};
