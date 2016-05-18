"use strict";
var action_pane_component_1 = require('./action-pane/action-pane.component');
var breadcrumbs_component_1 = require('./navigation/breadcrumbs/breadcrumbs.component');
var govuk_header_component_1 = require('./headers/govuk/govuk-header.component');
var page_title_component_1 = require('./banners/page-title/page-title.component');
var persist_info_component_1 = require('./banners/persist-info/persist-info.component');
var personal_details_component_1 = require('./data-visualisation/personal-details/personal-details.component');
var contact_info_component_1 = require('./data-visualisation/contact-info/contact-info.component');
var phase_banner_component_1 = require('./banners/phase-banner/phase-banner.component');
var arrow_component_1 = require('./navigation/arrow/arrow.component');
var next_previous_navigation_component_1 = require('./navigation/next-previous-navigation/next-previous-navigation.component');
var summary_item_component_1 = require('./data-visualisation/summary-item/summary-item.component');
var module = angular.module('govuk-single-page-pdk.components', [])
    .component('govActionPane', action_pane_component_1.ActionPaneComponent)
    .component('govBreadcrumbs', breadcrumbs_component_1.BreadcrumbsComponent)
    .component('govHeader', govuk_header_component_1.GovUkHeaderComponent)
    .component('govPageTitle', page_title_component_1.PageTitleComponent)
    .component('govPersonalDetails', personal_details_component_1.PersonalDetailsComponent)
    .component('govContactInfo', contact_info_component_1.ContactInfoComponent)
    .component('govPhaseBanner', phase_banner_component_1.PhaseBannerComponent)
    .component('govPersistInfoBanner', persist_info_component_1.PersistInfoComponent)
    .component('govArrow', arrow_component_1.ArrowComponent)
    .component('govNextPreviousNavigation', next_previous_navigation_component_1.NextPreviousNavigationComponent)
    .component('govSummaryItem', summary_item_component_1.SummaryItemComponent);
exports.components = module.name;
