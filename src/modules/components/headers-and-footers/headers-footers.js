"use strict";
var footer_component_1 = require('./footer/footer.component');
var header_component_1 = require('./header/header.component');
var module = angular.module('govuk-single-page-pdk.components.headers-footers', [])
    .component('govFooter', footer_component_1.FooterComponent)
    .component('govHeader', header_component_1.GovUkHeaderComponent);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=headers-footers.js.map