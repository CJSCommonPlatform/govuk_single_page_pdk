"use strict";
var navigation_1 = require('./navigation');
var docs_1 = require('../../../util/docs');
var action_pane_demo_1 = require('./action-pane/action-pane.demo');
var badge_item_demo_1 = require('./badge-item/badge-item.demo');
var breadcrumbs_demo_1 = require('./breadcrumbs/breadcrumbs.demo');
var completed_bar_demo_1 = require('./completed-bar/completed-bar.demo');
var next_previous_navigation_demo_1 = require('./next-previous-navigation/next-previous-navigation.demo');
var side_menu_demo_1 = require('./menus/side-menu/side-menu.demo');
var top_menu_demo_1 = require('./menus/top-menu/top-menu.demo');
var start_bar_demo_1 = require('./start-bar/start-bar.demo');
var module = angular.module('govuk-single-page-pdk.component-demos.navigation', [
    navigation_1["default"],
    docs_1["default"]
])
    .component('govActionPaneDemo', action_pane_demo_1.ActionPaneDemo)
    .component('govBadgeItemDemo', badge_item_demo_1.BadgeItemDemo)
    .component('govBreadcrumbsDemo', breadcrumbs_demo_1.BreadcrumbsDemo)
    .component('govCompletedBarDemo', completed_bar_demo_1.CompletedBarDemo)
    .component('govNextPreviousNavigationDemo', next_previous_navigation_demo_1.NextPreviousNavigationDemo)
    .component('govSideMenuDemo', side_menu_demo_1.SideMenuDemo)
    .component('govTopMenuDemo', top_menu_demo_1.TopMenuDemo)
    .component('govStartBarDemo', start_bar_demo_1.StartBarDemo);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=navigation-demos.js.map