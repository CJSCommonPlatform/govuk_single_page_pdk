"use strict";
var content_1 = require('./content');
var docs_1 = require('../../util/docs');
var module = angular.module('govuk-single-page-pdk.content-demos', [
    content_1.content,
    docs_1.docsUtils
]);
exports.contentDemos = module.name;
