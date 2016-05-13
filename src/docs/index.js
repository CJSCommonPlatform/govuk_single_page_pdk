"use strict";
require('index.scss');
var config_1 = require('./config');
var docs_1 = require('../components/docs');
var docs_2 = require('../content/docs');
var docs_3 = require('../examples/docs');
var docs_4 = require('../layout/docs');
var index_component_1 = require('./index/index.component');
var layout_component_1 = require('./layout/layout.component');
angular.module('govuk-single-page-pdk.docs', [
    config_1.config,
    docs_1.componentsDocs,
    docs_2.contentDocs,
    docs_3.examplesDocs,
    docs_4.layoutDocs,
    'ncy-angular-breadcrumb',
    'ui.router'
])
    .component('govDocsIndexPage', index_component_1.DocsIndexComponent)
    .component('govDocs', layout_component_1.DocsLayoutComponent);
