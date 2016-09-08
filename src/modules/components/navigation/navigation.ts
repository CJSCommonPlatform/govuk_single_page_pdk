import { ActionPaneComponent } from './action-pane/action-pane.component';
import { ArrowComponent } from './arrow/arrow.component';
import { BadgeItemComponent} from './badge-item/badge-item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ColumnNavigationComponent } from './column-navigation/column-navigation.component';
import { CompletedBarComponent} from './completed-bar/completed-bar.component';
import { NextPreviousNavigationComponent } from './next-previous-navigation/next-previous-navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SideMenuComponent} from './menus/side-menu/side-menu.component';
import { TopMenuComponent} from './menus/top-menu/top-menu.component';
import { StartBarComponent} from './start-bar/start-bar.component';

const module = angular.module('govuk-single-page-pdk.components.navigation', [])

  .component('govActionPane', ActionPaneComponent)
  .component('govArrow', ArrowComponent)
  .component('govBadgeItem', BadgeItemComponent)
  .component('govBreadcrumbs', BreadcrumbsComponent)
  .component('govColumnNavigation', ColumnNavigationComponent)
  .component('govCompletedBar', CompletedBarComponent)
  .component('govNextPreviousNavigation', NextPreviousNavigationComponent)
  .component('govSideMenu', SideMenuComponent)
  .component('govPagination', PaginationComponent)
  .component('govTopMenu', TopMenuComponent)
  .component('govStartBar', StartBarComponent);

export default module.name;