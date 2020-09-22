const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const version = require('../package.json').version

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src/index.webpack.ts'
  ],
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
            outputPath: 'font',
          }
        }
      },
      {
        test: /\.png$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img',
          }
        }
      },
      {
        test: /\.(html|hbs)$/,
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
                {search: '$\{prefix\}', replace: 'bell-', attr: 'g'},
                {search: 'process.env.NODE_VERSION', replace: JSON.stringify(version), attr: 'g'},
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
      'Yox': 'yox',
      '@component': path.resolve(__dirname, '..', 'src', 'component'),
      '@css': path.resolve(__dirname, '..', 'src', 'css'),
    }
  },
  externals: {
    yox: {
      root: 'Yox',
      commonjs: 'yox',
      commonjs2: 'yox',
      amd: 'yox'
    },
    soga: {
      root: 'Soga',
      commonjs: 'soga',
      commonjs2: 'soga',
      amd: 'soga'
    }
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        yox: {
          name: 'yox',
          test: /[\\/]node_modules[\\/]yox[\\/]/,
          priority: 30
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
