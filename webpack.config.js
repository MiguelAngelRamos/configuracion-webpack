const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false
        }
      }
    ]
  },
  optimization: {},
  plugins: [
    new HtmlWebpack({
      template: './src/index.html'
    })
  ],
}