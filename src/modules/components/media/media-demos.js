"use strict";
var docs_1 = require('../../../util/docs');
var media_1 = require('./media');
var image_demo_1 = require('./image/image.demo');
var statement_demo_1 = require('./statement/statement.demo');
var module = angular.module('govuk-single-page-pdk.component-demos.media', [
    media_1["default"],
    docs_1["default"]
])
    .component('govImageDemo', image_demo_1.ImageDemoComponent)
    .component('govStatementDemo', statement_demo_1.StatementDemo);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=media-demos.js.map