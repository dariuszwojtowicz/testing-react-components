const hashedFileName = '[name]-[hash].[ext]';

const imageRule = () => ({
  test: /\.(png|jpg|gif)$/,
  loader: 'file-loader',
  options: {
    name: hashedFileName
  }
});

const fontRule = () => ({
  test: /\.(woff|woff2|eot|ttf)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 8192,
      fallback: 'file-loader',
      name: hashedFileName,
      publicPath: '/fonts',
      outputPath: 'fonts'
    }
  }
});

const svgRule = () => ({
  test: /\.svg$/,
  oneOf: [{
    test: /\/fonts?\/.+\.svg$/,
    loader: 'url-loader',
    options: {
      limit: 8192,
      fallback: 'file-loader',
      name: hashedFileName,
      publicPath: '/fonts',
      outputPath: 'fonts'
    }
  }, {
    loader: 'file-loader',
    options: {
      name: hashedFileName
    }
  }]
});

const rules = (opts) => [
  imageRule(opts),
  fontRule(opts),
  svgRule(opts)
];

module.exports = rules;
