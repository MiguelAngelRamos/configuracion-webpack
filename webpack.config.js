const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/, // Que tipos de archivos quiero traer en este son los html
        loader: 'html-loader', // Para traerme el archivo html
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