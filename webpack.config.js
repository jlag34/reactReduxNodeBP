var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'axios', 'react', 'redux', 'react-dom', 'react-redux',
  'react-router', 'redux-promise'
];

module.exports = {
  entry: {
    bundle: './client/src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    chunkFilename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg|)$/,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 40000}
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: './client/src/index.html'
    })
  ],
  devtool: 'inline-source-map'
};