const path = require('path');

module.exports = {
  entry: './docs/index.js',
  output: {
    path: path.join(__dirname, 'docs/static'),
    filename: 'bundle.js',
    libraryTarget: 'var'
  },
  externals: {
    'react': "React",
    'react-dom': "ReactDOM"
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      packages: path.resolve(__dirname, "./packages"),
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    }
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
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style'
          },
          {
            loader: 'css'
          },
          {
            loader: 'less'
          }
        ],
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  }
};
