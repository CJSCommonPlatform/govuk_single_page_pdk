"use strict";
var module = angular.module('govuk-single-page-pdk.config.breadcrumbs', ['ncy-angular-breadcrumb'])
    .config(function ($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
        prefixStateName: 'home',
        template: require('../../components/breadcrumbs/ui-router-breadcrumbs.component.html')
    });
});
exports.breadcrumbConfig = module.name;
