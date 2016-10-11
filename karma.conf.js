var path = require('path');

module.exports = function(config) {
  config.set({
    autoWatch: true,
    browsers: ['Chrome'],
    // singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      externals: {
        'react/lib/ReactContext': 'window',
        'react/addons': true,
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: ['babel'],
            exclude: path.resolve(__dirname, "node_modules")
          },
          {
            test: /\.yaml$/,
            include: path.resolve(__dirname, 'test'),
            loaders: ['json', 'yaml']
          }
        ]
      },
      resolve: {
        alias: {
          slateEditorIcons: path.join(__dirname, './src/')
        }
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
