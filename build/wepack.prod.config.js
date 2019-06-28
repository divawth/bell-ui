const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config.js')

module.exports = merge(
  baseConfig,
  {
    mode: 'production',
    optimization: {
      minimize: false,
    },
    plugins: [
      // new CleanWebpackPlugin()
    ]
  }
)