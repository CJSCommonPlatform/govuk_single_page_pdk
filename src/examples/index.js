"use strict";
var layout_cmp_3_1 = require('./layout-3a/layout-cmp-3');
var page_cmp_3_1_1 = require('./page-3.1/page-cmp-3.1');
var page_cmp_3_2_1 = require('./page-3.2/page-cmp-3.2');
var service_3_1_1 = require('./services/service-3.1');
var module = angular.module('govuk_single_page.examples', [])
    .component('layoutComponentThree', layout_cmp_3_1.LayoutComponentThree)
    .component('pageComponentThreeOne', page_cmp_3_1_1.PageComponentThreeOne)
    .component('pageComponentThreeTwo', page_cmp_3_2_1.PageComponentThreeTwo)
    .service('ServiceThreeOne', service_3_1_1.ServiceThreeOne);
exports.examples = module.name;
//# sourceMappingURL=index.js.map