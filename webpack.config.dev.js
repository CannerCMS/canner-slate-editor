const path = require('path');

module.exports = {
  entry: './docs/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/docs/static/'
  },
  resolve: {
    extensions: ['.js']
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel',
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
};