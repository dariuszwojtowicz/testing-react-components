const postcssImport = require('postcss-import');
const presetEnvPlugin = require('postcss-preset-env');
const cssnano = require('cssnano');
const postcssReporter = require('postcss-reporter');
const path = require('path');

const postcssReporterPlugin = (opts) => {
  const config = {
    clearReportedMessages: true,
    throwError: opts.production
  };
  return postcssReporter(config);
};

const importPlugin = () => (
  postcssImport({
    path: [path.resolve('style')]
  })
);

module.exports = ({ options }) => ({
  map: !options.production,
  plugins: [
    importPlugin(),
    presetEnvPlugin({ stage: 0 }),
    options.production && cssnano(),
    options.production && postcssReporterPlugin(options)
  ]
});
