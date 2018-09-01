// Webpack v4
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/app.js',
    site: './src/sass/site.scss' // Bundle for the site level SASS files
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
  devtool: 'source-map', // Generate sourcemaps
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
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: {sourceMap: true} }, // Translates CSS into CommonJS
          { loader: 'postcss-loader', options: {sourceMap: true} }, // Add vendor prefixes to CSS
          { loader: "sass-loader", options: {sourceMap: true} } // compiles Sass to CSS
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          { loader: 'file-loader', options: { name: 'images/[name].[ext]' } }, // Names the file output
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ]
};