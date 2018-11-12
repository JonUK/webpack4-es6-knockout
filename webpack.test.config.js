// Webpack v4
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve('./dist'),
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // Transpiles ES6 down to ES5
        }
      },
      { test: /\.html$/, loader: 'null-loader' },
      { test: /.(s)?css$/, loader: 'null-loader' }
    ]
  }
};
