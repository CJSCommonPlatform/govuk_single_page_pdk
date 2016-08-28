"use strict";
var banners_demos_1 = require('./banners/banners-demos');
var data_visualisation_demos_1 = require('./data-visualisation/data-visualisation-demos');
var headers_footers_demos_1 = require('./headers-and-footers/headers-footers-demos');
var forms_errors_demos_1 = require('./forms-and-errors/forms-errors.demos');
var media_demos_1 = require('./media/media-demos');
var navigation_demos_1 = require('./navigation/navigation-demos');
var timeline_demos_1 = require('./timeline/timeline-demos');
var module = angular.module('govuk-single-page-pdk.component-demos', [
    banners_demos_1["default"],
    data_visualisation_demos_1["default"],
    forms_errors_demos_1["default"],
    headers_footers_demos_1["default"],
    media_demos_1["default"],
    navigation_demos_1["default"],
    timeline_demos_1["default"]
]);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=demos.js.map