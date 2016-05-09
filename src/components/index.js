"use strict";
var page_cmp_components_1 = require('./page-cmp-components');
var header_1 = require('./header/header');
var module = angular.module('govuk_single_page.components', [])
    .component('pageComponentComponents', page_cmp_components_1.PageComponentComponents)
    .component('headerCmp', header_1.HeaderCmp);
exports.components = module.name;
//# sourceMappingURL=index.js.map