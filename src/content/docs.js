"use strict";
var content_1 = require('./content');
var docs_1 = require('../util/docs');
var index_component_1 = require('./index/index.component');
var module = angular.module('govuk-single-page-pdk.content-docs', [
    content_1.content,
    docs_1.docsUtils
])
    .component('govDocsContentPage', index_component_1.ContentIndexComponent);
exports.contentDocs = module.name;
