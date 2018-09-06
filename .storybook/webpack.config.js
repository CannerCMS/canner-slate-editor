// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require("path");
const babelrc = require("../babel.config");

module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  // remove original storybook default settings
  storybookBaseConfig.module.rules = [
    {
      test: /\.js$/,
      use: {
        loader: path.resolve(__dirname, "../", "node_modules", "babel-loader"),
        options: {
          babelrc: false,
          ...babelrc
        }
      },
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        }
      ]
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "less-loader"
        }
      ]
    },
    {
      test: /\.md$/,
      use: "raw-loader"
    }
  ];

  storybookBaseConfig.resolve = {
    extensions: [".js"],
    alias: {
      packages: path.resolve(__dirname, "../packages"),
      plugins: path.resolve(__dirname, "../packages/plugins"),
      changes: path.resolve(__dirname, "../packages/changes"),
      slateIcons: path.resolve(__dirname, "../packages/slate-icons"),
      slateSelectors: path.resolve(__dirname, "../packages/slate-selectors"),
      quillIcons: path.resolve(__dirname, "../packages/quill-icons"),
      "styled-components": path.resolve(
        __dirname,
        "../node_modules",
        "styled-components"
      )
    }
  };

  // Return the altered config
  return storybookBaseConfig;
};
