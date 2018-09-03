const path = require("path");
const settings = require("./webpack.setting");

module.exports = {
  ...settings,
  mode: 'development',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/docs/static/"
  }
};
