"use strict";
var day_item_component_1 = require('./day-item/day-item.component');
var timeline_component_1 = require('./timeline/timeline.component');
var module = angular.module('govuk-single-page-pdk.components.timeline', [])
    .component('govDayItem', day_item_component_1.DayItemComponent)
    .component('govTimeline', timeline_component_1.TimelineComponent);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=timeline.js.map