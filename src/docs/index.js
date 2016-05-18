"use strict";
require('index.scss');
var config_1 = require('./config');
var demos_1 = require('../modules/components/demos');
var demos_2 = require('../modules/content/demos');
var demos_3 = require('../modules/layout/demos');
var app_layout_component_1 = require('./app/app-layout.component');
var components_component_1 = require('./app/components/components.component');
var content_component_1 = require('./app/content/content.component');
var examples_component_1 = require('./app/examples/examples.component');
var home_component_1 = require('./app/home/home.component');
var layout_component_1 = require('./app/layout/layout.component');
angular.module('govuk-single-page-pdk.docs', [
    config_1.config,
    demos_1.componentsDemos,
    demos_2.contentDemos,
    demos_3.layoutDemos,
    'ncy-angular-breadcrumb',
    'ui.router'
])
    .component('govDocs', app_layout_component_1.AppLayout)
    .component('govDocsHomePage', home_component_1.HomePage)
    .component('govDocsComponentsPage', components_component_1.ComponentsPage)
    .component('govDocsContentPage', content_component_1.ContentPage)
    .component('govDocsExamplesPage', examples_component_1.ExamplesPage)
    .component('govDocsLayoutPage', layout_component_1.LayoutPage);
