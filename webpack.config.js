const webpackConfig = require('./webpack');
const { resolve } = require('path');

const createConfig = (opts) => {
  const mode = opts.mode || 'production';
  console.error(`Starting webpack in mode: ${mode}`);
  return webpackConfig({
    production: mode === 'production',
    buildDir: resolve('build/dist')
  });
};

module.exports = (_, opts) => createConfig(opts);
