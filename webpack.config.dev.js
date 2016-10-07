var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './docs/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.json$/,
        include: [/node_modules/, 'slate-plugins'],
        loader: 'json-loader'
      }
    ]
  }
};
