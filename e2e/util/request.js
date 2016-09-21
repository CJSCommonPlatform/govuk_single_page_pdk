'use strict';

const request = require('request');
const log = require('./log');
const retryOnCodes = [
  'EAI_AGAIN',
  'ECONNRESET',
  'ECONNREFUSED',
  'EHOSTUNREACH',
  'ENOTFOUND',
  'EPIPE',
  'ESOCKETTIMEDOUT',
  'ETIMEDOUT'
];

let CJSCPPUID;
let baseUrl = '';
let proxy;
let timeout;
let retryCount = 0;

function req(options, cb) {
  let retriesRemaining = retryCount;

  if (options.authenticated) {
    options.headers.CJSCPPUID = CJSCPPUID;
  }
  if (proxy) {
    options.proxy = proxy;
  }
  if (CJSCPPUID) {
    options.qs = { CJSCPPUID };
  }
  if (options.timeout === undefined && timeout !== undefined) {
    options.timeout = timeout;
  }
  options.url = baseUrl + options.url;

  const responseHandler = (err, res, body) => {
    // insurance against api failing for what may be a temporary reason
    // any retry count specified should typically be accompanied by a
    // timeout to capture ETIMEDOUT responses – this should only be performed on
    // GET requests as they are idempotent
    if (err && options.method === 'GET' && retryOnCodes.indexOf(err.code) > -1 && retriesRemaining > 0) {
      retriesRemaining--;
      return request(options, responseHandler);
    }
    // any non-2xx response is handled as an error
    if (err || !`${res.statusCode}`.match(/^2\d\d$/)) {
      return cb(err || `${res.statusCode} - ${res.body ? res.body.error : 'Error!'}`);
    }
    cb(null, body || res.body ? JSON.parse(res.body) : undefined);
  };
  request(options, responseHandler);
}

req.setTimeout = time => timeout = time;
req.setRetryCount = count => retryCount = count;
req.setBaseUrl = url => baseUrl = url;
req.setProxy = url => proxy = `http://${url}`;
req.setCJSCPPUID = id => CJSCPPUID = id;

module.exports = req;