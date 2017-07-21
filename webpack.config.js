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
		//path是nodeJs的和webpack没有关系，join(用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。)和resolve(绝对路径打包)
		path: path.resolve(__dirname, 'dist'),
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
			template: path.resolve(__dirname, 'index.html'),
		})
		// new OpenBrowserPlugin({
		//     url: 'http://localhost:3000'
		// })
	],
	devServer: {
		//设置为ture页面发生变化时，更新页面
		inline: true,
		//默认情况下会从根目录下查找文件
		contentBase: "./", 
		//端口
		port: '8088',
		//设置为true，页面找不到的时候，会跳转到index.html
		historyApiFallback: true,
		hot: true,
		//配置服务器
		//pathRewrite: {'^/api' : ''}又把http//localhost:8080/api后面的api去除了,这里没有设置
		proxy: {
			//'/api' 本身代表http//localhost:8080/api
			'/api/': {
				//target将http//localhost:8080/api指向'https//other-server.example.com'
				target: 'http://m.maizuo.com',
				host: 'm.maizuo.com',
				//存在跨域的设置为true
				changeOrigin: true
			}
		}
	}
};