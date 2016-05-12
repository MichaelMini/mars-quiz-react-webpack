var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/main.jsx',
	},

	output: {
		filename: '[name].js',
		publicPath: '/build/'
	},

	devtool:'#source-map',

	devServer: {
		watch: true,
		inline: true,
		host: '0.0.0.0',
		port: '3000',
		watchOptions: {
			aggregateTimeout: 300,
			poll: true
		}
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
		        loader: 'babel-loader',
		        query: {
			        presets: ['es2015', 'react']
			    }
			},
			{
		        test: /\.scss$/,
		        loaders: ['style', 'css', 'sass']
		    }
		]
	},
	resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
    	new webpack.ProvidePlugin({
    		$: "jquery",
    		jQuery: "jquery"
    	})
    ]
}