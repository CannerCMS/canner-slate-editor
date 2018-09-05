// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require("path");
const babelrc = require("../babel.config");

module.exports = {
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(
            __dirname,
            "../",
            "node_modules",
            "babel-loader"
          ),
          options: babelrc
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style"
          },
          {
            loader: "css"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style"
          },
          {
            loader: "css"
          },
          {
            loader: "less"
          }
        ]
      },
      {
        test: /\.md$/,
        use: "raw"
      }
    ]
  },
  resolve: {
    extensions: [".js"],
    alias: {
      packages: path.resolve(__dirname, "../packages"),
      plugins: path.resolve(__dirname, "../packages/plugins"),
      helpers: path.resolve(__dirname, "../packages/helpers"),
      slateIcons: path.resolve(__dirname, "../packages/slate-icons"),
      slateSelectors: path.resolve(__dirname, "../packages/slate-selectors"),
      quillIcons: path.resolve(__dirname, "../packages/quill-icons"),
      "styled-components": path.resolve(
        __dirname,
        "node_modules",
        "styled-components"
      )
    }
  }
};
