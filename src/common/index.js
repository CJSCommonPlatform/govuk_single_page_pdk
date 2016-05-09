"use strict";
var service_a_1 = require('./services/service-a');
var directive_a_1 = require('./directives/directive-a');
var filter_a_1 = require('./filters/filter-a');
var module = angular.module('govuk_single_page.core', [])
    .filter('filterA', filter_a_1.filterA)
    .service('ServiceA', service_a_1.ServiceA)
    .directive('directiveA', directive_a_1.DirectiveA);
exports.common = module.name;
//# sourceMappingURL=index.js.map