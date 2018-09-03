const path = require('path');

module.exports = {
  entry: {
    cannerSlateEditor: "./docs/canner-slate-editor/index.js",
    markdownPlugin: "./docs/markdown-plugin/index.js",
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
        use: 'babel',
        exclude: /node_modules/
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
