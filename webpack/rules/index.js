const scripts = require('./scripts');
const styles = require('./styles');
const assets = require('./assets');

const rules = (opts) => [
  ...styles(opts),
  ...scripts(opts),
  ...assets(opts)
];

module.exports = rules;
