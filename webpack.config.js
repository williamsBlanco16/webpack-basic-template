const HtmlWebpackPlugin = require('html-webpack-plugin')
const babelRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use:{
    loader: "babel-loader",
    options:{
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
}
module.exports = {
  module : {
    rules:[babelRule]
  },
  plugins:[ new HtmlWebpackPlugin()]
}