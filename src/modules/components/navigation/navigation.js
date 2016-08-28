"use strict";
var action_pane_component_1 = require('./action-pane/action-pane.component');
var arrow_component_1 = require('./arrow/arrow.component');
var badge_item_component_1 = require('./badge-item/badge-item.component');
var breadcrumbs_component_1 = require('./breadcrumbs/breadcrumbs.component');
var completed_bar_component_1 = require('./completed-bar/completed-bar.component');
var next_previous_navigation_component_1 = require('./next-previous-navigation/next-previous-navigation.component');
var side_menu_component_1 = require('./menus/side-menu/side-menu.component');
var top_menu_component_1 = require('./menus/top-menu/top-menu.component');
var start_bar_component_1 = require('./start-bar/start-bar.component');
var module = angular.module('govuk-single-page-pdk.components.navigation', [])
    .component('govActionPane', action_pane_component_1.ActionPaneComponent)
    .component('govArrow', arrow_component_1.ArrowComponent)
    .component('govBadgeItem', badge_item_component_1.BadgeItemComponent)
    .component('govBreadcrumbs', breadcrumbs_component_1.BreadcrumbsComponent)
    .component('govCompletedBar', completed_bar_component_1.CompletedBarComponent)
    .component('govNextPreviousNavigation', next_previous_navigation_component_1.NextPreviousNavigationComponent)
    .component('govSideMenu', side_menu_component_1.SideMenuComponent)
    .component('govTopMenu', top_menu_component_1.TopMenuComponent)
    .component('govStartBar', start_bar_component_1.StartBarComponent);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=navigation.js.map