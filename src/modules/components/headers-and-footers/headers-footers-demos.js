"use strict";
var docs_1 = require('../../../util/docs');
var headers_footers_1 = require('./headers-footers');
var footer_demo_1 = require('./footer/footer.demo');
var header_demo_1 = require('./header/header.demo');
var module = angular.module('govuk-single-page-pdk.component-demos.headers-footers', [
    headers_footers_1["default"],
    docs_1["default"]
])
    .component('govHeaderDemo', header_demo_1.GovUkHeaderDemo)
    .component('govFooterDemo', footer_demo_1.FooterDemo);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=headers-footers-demos.js.map