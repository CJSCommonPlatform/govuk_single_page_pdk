'use strict';

const chalk = require('chalk');

function error(msg, description) {
  console.log(`${getTimestamp()} ${chalk.red(msg + '. ' + description)}`);
}

function getTimestamp() {
  const now = new Date();
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  return `[${chalk.gray(time)}]`;
}

function info(msg) {
  console.log(`${getTimestamp()} ${chalk.magenta(msg)}`);
}

function pad(num) {
  const val = num !== undefined ? num.toString() : '';
  return val.length >= 2 ? val : new Array(2 - val.length + 1).join('0') + val;
}

module.exports = {
  error,
  info
};