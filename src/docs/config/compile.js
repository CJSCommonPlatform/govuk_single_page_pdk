"use strict";
var isProd = process.env.NODE_ENV === 'production';
var module = angular.module('govuk-single-page-pdk.config.compile', [])
    .config(function ($compileProvider) {
    $compileProvider.debugInfoEnabled(!isProd);
});
exports.compileConfig = module.name;
