const tsRule = () => ({
  test: /\.(t|j)sx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true
  }
});

const rules = (opts) => [
  tsRule(opts)
].filter(rule => !!rule);

module.exports = rules;
