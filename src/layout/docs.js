"use strict";
var layout_1 = require('./layout');
var docs_1 = require('../util/docs');
var index_component_1 = require('./index/index.component');
var module = angular.module('govuk-single-page-pdk.layout-docs', [
    docs_1.docsUtils,
    layout_1.layout
])
    .component('govDocsLayoutPage', index_component_1.LayoutIndexComponent);
exports.layoutDocs = module.name;
