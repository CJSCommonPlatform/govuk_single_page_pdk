"use strict";
var routes_1 = require('../routes');
var module = angular.module('govuk-single-page-pdk.config.routes', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
    routes_1.routes.forEach(function (config) { return $stateProvider.state(config.state, config); });
    $urlRouterProvider.otherwise('/');
});
exports.routeConfig = module.name;
