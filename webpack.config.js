var glob = require('glob');
var path = require('path');
var nodeExternals = require('webpack-node-externals');


process.env.NODE_ENV = 'production';

module.exports = {
  entry: './main.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'main.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname,
    }]
  },

};

function globEntries(globPath) {
  var files = glob.sync(globPath);
  var entries = {};

  for (var i = 0; i < files.length; i++) {
    var entry = files[i];
    entries[path.basename(entry, path.extname(entry))] = './' + entry;
  }

  return entries;
}

