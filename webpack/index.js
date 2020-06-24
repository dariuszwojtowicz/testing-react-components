const devserver = require('./devserver');
const plugins = require('./plugins');
const rules = require('./rules');

const webpackConfig = opts => ({
  devtool: !opts.production && 'source-map',
  module: { rules: rules(opts) },
  plugins: plugins(Object.assign({
    chunks: ['main']
  }, opts)),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css']
  },
  devServer: devserver(opts),
  entry: {
    main: './src',
  },
  output: {
    path: opts.buildDir,
    publicPath: '/',
    libraryTarget: 'umd',
    filename: opts.production
      ? '[name]-[chunkhash].js'
      : '[name].js',
    chunkFilename: opts.production ? '[id]-[chunkhash].js' : '[id].js'
  }
});

module.exports = webpackConfig;
