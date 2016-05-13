"use strict";
var breadcrumbs_component_1 = require('./breadcrumbs/breadcrumbs.component');
var govuk_header_component_1 = require('./headers/govuk/govuk-header.component');
var phase_banner_component_1 = require('./banners/phase-banner/phase-banner.component');
var action_pane_component_1 = require('./action-pane/action-pane.component');
var persist_info_component_1 = require('./banners/persist-info/persist-info.component');
var personal_details_component_1 = require('./personal-details/personal-details.component');
var module = angular.module('govuk-single-page-pdk.components', [])
    .component('govActionPane', action_pane_component_1.ActionPaneComponent)
    .component('govBreadcrumbs', breadcrumbs_component_1.BreadcrumbsComponent)
    .component('govHeader', govuk_header_component_1.GovUkHeaderComponent)
    .component('govPersistInfoBanner', persist_info_component_1.PersistInfoComponent)
    .component('govPersonalDetails', personal_details_component_1.PersonalDetailsComponent)
    .component('govPhaseBanner', phase_banner_component_1.PhaseBannerComponent);
exports.components = module.name;
