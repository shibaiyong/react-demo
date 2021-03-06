const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const PATH = {
	src: path.join(__dirname, "src"),
	build: path.resolve(__dirname, "build")
}

const commonConfig = {
	entry: {
		src: path.join(PATH.src, "root.js")
	},
	output:{
		publicPath: '/', 
		path: PATH.build,
		filename: '[name].js'
	},
	module: {
		loaders:[
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'es2016']
				}
			},{
				test: /\.css?$/,
				use: [
    				'style-loader',
    				'css-loader',
    				{
      					loader: 'postcss-loader',
      					options: {
					        plugins: () => ([
					          require('autoprefixer')
					        ]),
      					},
    				},
  				]
			},{
				test: /\.mcss?$/,
				loader: 'style-loader!css-loader?modules=true'
			},{
				test: /\.less?$/,
				loader: 'style-loader!css-loader!less-loader'
			},{
		        test: /\.mustache/,
			    loader: 'mustache-loader'
			},{
		       test: /\.(png|jpg|svg|gif|jpeg)$/,
		       loader: 'url-loader?limit=8192&name=images/[name].[ext]'
		    }
		]
	},
	plugins:[new HtmlWebpackPlugin({
		title: "react study",
		template: path.join(__dirname, "index.html")
	})]
}

const productConfig = merge(commonConfig, {
	plugins:[
		new webpack.DefinePlugin({
				'process.env':{
		        'NODE_ENV': JSON.stringify('production')
			}
	    }),
		new webpack.optimize.UglifyJsPlugin()
	]
})

const devConfig = merge([
	commonConfig,
	{
		devServer: {
			historyApiFallback: true,
			inline: true
		}
	}
])

module.exports = (env) => {

	if (env == "dev") {
		return devConfig;
	}

	return productConfig;
}