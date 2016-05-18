"use strict";
var angular = require('angular');
var components_1 = require('./modules/components/components');
var content_1 = require('./modules/content/content');
var examples_1 = require('./modules/examples/examples');
var layout_1 = require('./modules/layout/layout');
angular.module('@govuk/angularjs-components', [
    components_1.components,
    content_1.content,
    examples_1.examples,
    layout_1.layout
]);
