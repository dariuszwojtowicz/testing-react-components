const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = require('../src/config.json');

const htmlPlugin = (opts) =>
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    chunksSortMode: 'dependency',
    config,
    inject: false,
    minify: opts.production ? {
      caseSensitive: true,
      collapseWhitespace: true,
      removeComments: true
    } : false,
    chunks: opts.chunks
  });

const extractCssPlugin = (opts) =>
  new MiniCssExtractPlugin({
    filename: opts.production ? '[name]-[hash].css' : '[name].css',
    chunkFilename: opts.production ? '[id]-[chunkhash].css' : '[id].css'
  });

const definePlugin = (opts) =>
  new webpack.DefinePlugin({
    'process.env': {
      'PROD_ENV': JSON.stringify(opts.production),
      'DEV_ENV': JSON.stringify(!opts.production),
      'NODE_ENV': JSON.stringify(opts.production ? 'production' : 'development'),
    }
  });

const plugins = (opts) => [
  extractCssPlugin(opts),
  htmlPlugin(opts),
  definePlugin(opts)
];

module.exports = plugins;
