import navigation from './navigation';
import docsUtils from '../../../util/docs';

import { ActionPaneDemo } from './action-pane/action-pane.demo';
import { BadgeItemDemo} from './badge-item/badge-item.demo';
import { BreadcrumbsDemo } from './breadcrumbs/breadcrumbs.demo';
import { ColumnNavigationDemo } from './column-navigation/column-navigation.demo';
import { NextPreviousNavigationDemo } from './next-previous-navigation/next-previous-navigation.demo';
import { PaginationDemo } from './pagination/pagination.demo';
import { SideMenuDemo } from './menus/side-menu/side-menu.demo';
import { TopMenuDemo } from './menus/global-navigation/top-menu.demo';

import { ActionDocs } from './actions/actions.docs';

const module = angular.module('govuk-single-page-pdk.component-demos.navigation', [
  navigation,
  docsUtils
])
  .component('actionDocs', ActionDocs)

  .component('govActionPaneDemo', ActionPaneDemo)
  .component('govBadgeItemDemo', BadgeItemDemo)
  .component('govBreadcrumbsDemo', BreadcrumbsDemo)
  .component('govColumnNavigationDemo', ColumnNavigationDemo)
  .component('govNextPreviousNavigationDemo', NextPreviousNavigationDemo)
  .component('govPaginationDemo', PaginationDemo)
  .component('govSideMenuDemo', SideMenuDemo)
  .component('govTopMenuDemo', TopMenuDemo);

export default module.name;