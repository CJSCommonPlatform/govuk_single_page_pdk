"use strict";
var layout_1 = require('./layout');
var docs_1 = require('../../util/docs');
var module = angular.module('govuk-single-page-pdk.layout-demos', [
    docs_1.docsUtils,
    layout_1.layout
]);
exports.layoutDemos = module.name;
