"use strict";
var examples_1 = require('./examples');
var docs_1 = require('../util/docs');
var index_component_1 = require('./index/index.component');
var module = angular.module('govuk-single-page-pdk.demos-docs', [
    docs_1.docsUtils,
    examples_1.examples
])
    .component('govDocsExamplesPage', index_component_1.ExamplesIndexComponent);
exports.examplesDocs = module.name;
