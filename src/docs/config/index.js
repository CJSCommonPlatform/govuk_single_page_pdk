"use strict";
var routes_1 = require('./routes');
var breadcrumbs_1 = require('./breadcrumbs');
var compile_1 = require('./compile');
var module = angular.module('govuk-single-page-pdk.config', [
    breadcrumbs_1.breadcrumbConfig,
    routes_1.routeConfig,
    compile_1.compileConfig
]);
exports.config = module.name;
