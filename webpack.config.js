'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
  'webpack-hot-middleware/client?reload=true',
  path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
},
plugins: [
new HtmlWebpackPlugin({
  template: 'app/index.html',
  inject: 'body',
  filename: 'index.html'
}),
new webpack.optimize.OccurenceOrderPlugin(),
new webpack.HotModuleReplacementPlugin(),
new webpack.NoErrorsPlugin(),
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
})
],
module: {
    loaders: [
        { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' }, 
        { test: /\.css$/, loaders: ['style-loader', 'css-loader?sourceMap'] },
        { test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap!sass-loader?sourceMap'] },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
        { test: /\.(jpg|jpeg|gif|png|ico)$/, exclude: /node_modules/, loader: 'url-loader?limit=8192' },
        { test: /\.(ico)$/, loader: 'static-loader' }
    ]
}
};
