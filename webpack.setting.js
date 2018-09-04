const path = require('path');
const babelrc = require('./.babelrc');

module.exports = {
  entry: {
    cannerSlateEditor: "./docs/canner-slate-editor/index.js",
    markdownEditor: "./docs/markdown-editor/index.js",
    quillIcons: "./docs/quill-icons/index.js",
    sidebar: "./docs/sidebar/index.js",
    slateIcons: "./docs/slate-icons/index.js",
    toolbar: "./docs/toolbar/index.js"
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelrc
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style'
          },
          {
            loader: 'css'
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
        use: 'raw'
      }
    ]
  },
  resolve: {
    extensions: [".js"],
    alias: {
      packages: path.resolve(__dirname, "./packages"),
      plugins: path.resolve(__dirname, "./packages/plugins"),
      helpers: path.resolve(__dirname, "./packages/helpers"),
      slateIcons: path.resolve(__dirname, "./packages/slate-icons"),
      slateSelectors: path.resolve(__dirname, "./packages/slate-selectors"),
      quillIcons: path.resolve(__dirname, "./packages/quill-icons"),
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    }
  }
}
