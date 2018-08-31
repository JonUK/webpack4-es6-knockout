// Webpack v4
const path = require('path');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/main.js']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve('./dist'),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true // Show errors in overlay on the website
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // Transpiles ES6 down to ES5
        }
      },
      {
        test: /\.html$/, // All component views
        exclude: path.resolve('./src/index.html'), // Exclude the main index page
        use: ['html-loader'] // Adds the component views to the bundle
      },
      {
        test: path.resolve('./src/index.html'), // Match main index page and copy to dist folder
        use: [
          { loader: 'file-loader', options: { name: '[name].html' } }, // Names the file output
          { loader: "extract-loader" }, // Tells webpack that this should be a separate file and not in the bundle
          { loader: "html-loader", options: { attrs: ['img:src'] } } // Linting
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // Injects the CSS into the HTML
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          { loader: 'file-loader', options: { name: 'images/[name].[ext]' } }, // Names the file output
        ]
      },
    ]
  }
};