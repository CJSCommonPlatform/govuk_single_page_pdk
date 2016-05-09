"use strict";
var routes_1 = require('./routes');
var module = angular.module('govuk_single_page.config', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
    routes_1.routes.forEach(function (config) { return $stateProvider.state(config.state, config); });
    $urlRouterProvider.otherwise('/single_page_service_development_kit');
});
exports.config = module.name;
//# sourceMappingURL=index.js.map