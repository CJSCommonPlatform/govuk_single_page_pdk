"use strict";
var cmp_2_1_1 = require('./components/cmp-2.1/cmp-2.1');
var page_cmp_2_1_1 = require('./page-2.1/page-cmp-2.1');
var filter_2_1_1 = require('./filters/filter-2.1');
var module = angular.module('govuk_single_page.domain-2', [])
    .component('pageComponentTwoOne', page_cmp_2_1_1.PageComponentTwoOne)
    .component('componentTwoOne', cmp_2_1_1.ComponentTwoOne)
    .filter('filterTwoOne', filter_2_1_1.filterTwoOne);
exports.content = module.name;
//# sourceMappingURL=index.js.map