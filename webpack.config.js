// Webpack v4
const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
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
        test: path.resolve('./src/index.html'), // Main index page
        use: [
          { loader: 'file-loader', options: { name: '[name].html' } }, // Names the file output
          { loader: "extract-loader" }, // Tells webpack that this should be a separate file and not in the bundle
          { loader: "html-loader", options: { attrs: ['img:src'] } } // Linting
        ]
      },
      {
        test: /\.html$/, // All component views
        exclude: path.resolve('./src/index.html'), // Exclude the main index page
        use: ['html-loader']
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