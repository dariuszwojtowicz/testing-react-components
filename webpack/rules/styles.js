const path = require('path');

const cssLoader = (opts, loaderOpts = {}) => ({
  loader: 'css-loader',
  options: Object.assign({
    importLoaders: 1,
    sourceMap: !opts.production
  }, loaderOpts)
});

const cssModuleLoader = (opts) =>
  cssLoader(opts, { modules: { localIdentName: "[name]__[local]___[hash:base64:5]" } });

const postCssLoader = (opts) => ({
  loader: 'postcss-loader',
  options: {
    config: { ctx: opts }
  }
});

const globalCssRule = (opts) => ({
  include: path.resolve('style'),
  use: [
    'style-loader',
    cssLoader(opts),
    postCssLoader(opts)
  ].filter(loader => loader !== false)
});

const moduleCssRule = (opts) => ({
  include: path.resolve('src'),
  use: [
    'style-loader',
    cssModuleLoader(opts),
    postCssLoader(opts)
  ].filter(loader => loader !== false)
});

const styleRule = (opts) => ({
  test: /\.css$/,
  oneOf: [
    globalCssRule(opts),
    moduleCssRule(opts)
  ]
});

const rules = (opts) => [
  styleRule(opts)
];

module.exports = rules;
