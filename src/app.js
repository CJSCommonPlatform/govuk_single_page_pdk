"use strict";
var common_1 = require('./common');
var config_1 = require('./config');
var sdk_1 = require('./sdk');
var components_1 = require('./components');
require('./app.scss');
var appModule = angular.module('govuk_single_page', [
    common_1.common,
    config_1.config,
    sdk_1.sdk,
    components_1.components,
    'oc.lazyLoad',
    'ui.router'
]);
exports.app = appModule.name;
//# sourceMappingURL=app.js.map