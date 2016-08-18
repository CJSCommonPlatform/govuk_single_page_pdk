import navigation from './navigation';
import docsUtils from '../../../util/docs';

import { ActionPaneDemo } from './action-pane/action-pane.demo';
import { BadgeItemDemo} from './badge-item/badge-item.demo';
import { BreadcrumbsDemo } from './breadcrumbs/breadcrumbs.demo';
import { CompletedBarDemo} from './completed-bar/completed-bar.demo';
import { NextPreviousNavigationDemo } from './next-previous-navigation/next-previous-navigation.demo';
import { SideMenuDemo } from './menus/side-menu/side-menu.demo';
import { TopMenuDemo } from './menus/top-menu/top-menu.demo';
import { StartBarDemo } from './start-bar/start-bar.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.navigation', [
  navigation,
  docsUtils
])
  .component('govActionPaneDemo', ActionPaneDemo)
  .component('govBadgeItemDemo', BadgeItemDemo)
  .component('govBreadcrumbsDemo', BreadcrumbsDemo)
  .component('govCompletedBarDemo', CompletedBarDemo)
  .component('govNextPreviousNavigationDemo', NextPreviousNavigationDemo)
  .component('govSideMenuDemo', SideMenuDemo)
  .component('govTopMenuDemo', TopMenuDemo)
  .component('govStartBarDemo', StartBarDemo);

export default module.name;