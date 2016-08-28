"use strict";
var timeline_1 = require('./timeline');
var docs_1 = require('../../../util/docs');
var timeline_demo_1 = require('./timeline/timeline.demo');
var module = angular.module('govuk-single-page-pdk.component-demos.timeline', [
    timeline_1["default"],
    docs_1["default"]
])
    .component('govTimelineDemo', timeline_demo_1.TimelineDemo);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=timeline-demos.js.map