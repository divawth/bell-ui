const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const port = 8080

module.exports = merge(
  baseConfig,
  {
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, '..', ''),
      host: 'localhost',
      port: port,
      hot: true,
      overlay: true,
      proxy: { },
      historyApiFallback: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  }
)
