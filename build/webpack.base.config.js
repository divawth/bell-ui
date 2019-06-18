const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bell-ui.js',
    library: 'bell',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          'yox-template-loader',
          {
            loader: 'webpack-replace-loader',
            options: {
              arr: [
                {search: '$\{prefix\}', replace: 'bell-', attr: 'g'}
              ]
            }
          }
        ]
      },
      {
        test: /\.(js|ts)$/,
        use: [
          'ts-loader',
          {
            loader: 'webpack-replace-loader',
            options: {
              arr: [
                {search: '$\{prefix\}', replace: 'bell-', attr: 'g'}
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'Yox': 'yox'
    }
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        yox: {
          test: /[\\/]node_modules[\\/]yox[\\/]/,
          priority: 10
        }
      }
    },
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: `bell-ui.css`
    })
  ]
}
