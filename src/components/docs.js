"use strict";
var components_1 = require('./components');
var docs_1 = require('../util/docs');
var index_component_1 = require('./index/index.component');
var breadcrumbs_demo_1 = require('./breadcrumbs/breadcrumbs.demo');
var govuk_header_demo_1 = require('./headers/govuk/govuk-header.demo');
var phase_banner_demo_1 = require('./banners/phase-banner/phase-banner.demo');
var action_pane_demo_1 = require('./action-pane/action-pane.demo');
var persist_info_demo_1 = require('./banners/persist-info/persist-info.demo');
var personal_details_demo_1 = require('./personal-details/personal-details.demo');
var module = angular.module('govuk-single-page-pdk.components-docs', [
    components_1.components,
    docs_1.docsUtils
])
    .component('govDocsComponentsPage', index_component_1.ComponentsIndexComponent)
    .component('govActionPaneDemo', action_pane_demo_1.ActionPaneDemo)
    .component('govBreadcrumbsDemo', breadcrumbs_demo_1.BreadcrumbsDemo)
    .component('govHeaderDemo', govuk_header_demo_1.GovUkHeaderDemo)
    .component('govPersistInfoBannerDemo', persist_info_demo_1.PersistInfoDemo)
    .component('govPersonalDetailsDemo', personal_details_demo_1.PersonalDetailsDemo)
    .component('govPhaseBannerDemo', phase_banner_demo_1.PhaseBannerDemo);
exports.componentsDocs = module.name;
