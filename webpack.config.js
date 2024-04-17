const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/, // Que tipos de archivos quiero traer en este caso son los html
        loader: 'html-loader', // Para traerme el archivo html
        options: {
          sources: false
        }
      },
      {
        test: /\.css$/, // Que tipos de archivos quiero traer en este caso son los css
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, 'css-loader']
      }
    ]
  },
  optimization: {},
  plugins: [
    new HtmlWebpack({
      template: './src/index.html'
    }),
    new MiniCssExtract({
      filename: '[name].css',
      ignoreOrder: false
    })
  ],
}