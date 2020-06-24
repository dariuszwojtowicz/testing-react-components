const slow = require('connect-slow');
const morgan = require('morgan');
const express = require('express');
const { resolve } = require('path');

const devserver = (opts) => ({
  historyApiFallback: true,
  port: 9092,
  before: (app) => {
    app.use('/favicons', express.static(resolve(opts.buildDir, 'favicons')));
    app.use('/static', express.static(resolve(opts.buildDir, 'static')));
    app.use(morgan('tiny'));
    app.use(slow({
      url: /\/api\//i,
      delay: 300
    }));
  },
  proxy: {
    '/api/**': {
      target: 'http://localhost:6601',
      onProxyReq: (proxyReq, req) =>
        console.log('PROXY', req.originalUrl)
    },
  }
});

module.exports = devserver;
