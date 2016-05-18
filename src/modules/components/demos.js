"use strict";
var components_1 = require('./components');
var docs_1 = require('../../util/docs');
var breadcrumbs_demo_1 = require('./navigation/breadcrumbs/breadcrumbs.demo');
var govuk_header_demo_1 = require('./headers/govuk/govuk-header.demo');
var phase_banner_demo_1 = require('./banners/phase-banner/phase-banner.demo');
var page_title_demo_1 = require('./banners/page-title/page-title.demo');
var action_pane_demo_1 = require('./action-pane/action-pane.demo');
var persist_info_demo_1 = require('./banners/persist-info/persist-info.demo');
var personal_details_demo_1 = require('./data-visualisation/personal-details/personal-details.demo');
var contact_info_demo_1 = require('./data-visualisation/contact-info/contact-info.demo');
var next_previous_navigation_demo_1 = require('./navigation/next-previous-navigation/next-previous-navigation.demo');
var summary_item_demo_1 = require('./data-visualisation/summary-item/summary-item.demo');
var module = angular.module('govuk-single-page-pdk.components-demos', [
    components_1.components,
    docs_1.docsUtils
])
    .component('govActionPaneDemo', action_pane_demo_1.ActionPaneDemo)
    .component('govBreadcrumbsDemo', breadcrumbs_demo_1.BreadcrumbsDemo)
    .component('govHeaderDemo', govuk_header_demo_1.GovUkHeaderDemo)
    .component('govPageTitleDemo', page_title_demo_1.PageTitleDemo)
    .component('govPersonalDetailsDemo', personal_details_demo_1.PersonalDetailsDemo)
    .component('govPhaseBannerDemo', phase_banner_demo_1.PhaseBannerDemo)
    .component('govContactInfoDemo', contact_info_demo_1.ContactInfoDemo)
    .component('govPersistInfoBannerDemo', persist_info_demo_1.PersistInfoDemo)
    .component('govNextPreviousNavigationDemo', next_previous_navigation_demo_1.NextPreviousNavigationDemo)
    .component('govSummaryItemDemo', summary_item_demo_1.SummaryItemDemo);
exports.componentsDemos = module.name;
