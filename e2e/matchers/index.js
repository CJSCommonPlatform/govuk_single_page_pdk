'use strict';

const appMatchers = require('./app');
const coreMatchers = require('./core');
const componentMatchers = require('./components');

module.exports = Object.assign(
  appMatchers,
  coreMatchers,
  componentMatchers
);