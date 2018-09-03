const path = require('path');
const settings = require("./webpack.setting");

module.exports = {
  ...settings,
  mode: 'production',
  output: {
    path: path.join(__dirname, 'docs/static'),
    filename: '[name].js',
    libraryTarget: 'var'
  },
  externals: {
    'react': "React",
    'react-dom': "ReactDOM"
  }
};
