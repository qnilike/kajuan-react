const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app.js',
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist'),
		chunkFilename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.json', '.less']
	},
	module: {
		rules: [{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			use: [{
				loader: 'react-hot-loader'
			}, {
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['transform-runtime']
				}
			}]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.less$/,
			use: [
				'style-loader',
				'css-loader',
				'less-loader'
			]
		}]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html'),
		})
		// new OpenBrowserPlugin({
		//     url: 'http://localhost:3000'
		// })
	],
	devServer: {
		inline: true,
		contentBase: "./", //content not from webpack is serverd
		port: '8088',
		historyApiFallback: true,
		hot: true,
		//配置服务器
		proxy: {
			'/api/': {
				target: 'http://m.maizuo.com',
				host: 'm.maizuo.com',
				changeOrigin: true
			}
		}
	}
};