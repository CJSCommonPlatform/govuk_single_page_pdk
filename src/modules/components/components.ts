/* tslint:disable:max-line-length */

import { ActionPaneComponent } from './navigation/action-pane/action-pane.component';
import { BreadcrumbsComponent } from './navigation/breadcrumbs/breadcrumbs.component';
import { GovUkHeaderComponent } from './headers-and-footers/header/header.component.ts';
import { PageTitleComponent } from './banners/page-title/page-title.component';
import { PersistInfoComponent} from './banners/persist-info/persist-info.component';
import { PersonalDetailsComponent } from './data-visualisation/personal-details/personal-details.component';
import { ContactInfoComponent} from './data-visualisation/contact-info/contact-info.component';
import { PhaseBannerComponent } from './banners/phase-banner/phase-banner.component';
import { ArrowComponent } from './navigation/arrow/arrow.component';
import { NextPreviousNavigationComponent }
    from './navigation/next-previous-navigation/next-previous-navigation.component';
import { SummaryItemComponent} from './data-visualisation/summary-item/summary-item.component';
import { DayItemComponent } from './timeline/day-item/day-item.component';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { ImageComponent } from './media/image/image.component';
import { StatementComponent } from './media/statement/statement.component';
import { MediaIconComponent } from './media/media-icon/media-icon.component';
import { toBytes } from './media/filters/toBytes.filter';
import { noFileType } from './media/filters/noFileType.filter';
import { toFileType } from './media/filters/toFileType.filter';
import { DigitBoxComponent } from './data-visualisation/digit-box/digit-box.component';
import { HighlightTextComponent } from './banners/highlight-text/highlight-text.component';
import { VideoComponent} from './media/video/video.component';
import { TabComponent } from './data-visualisation/tab/tab.component';
import { TabsetComponent} from './data-visualisation/tab/tabset.component';
import { NotificationComponent } from './banners/notification/notification.component';
import { FooterComponent } from './headers-and-footers/footer/footer.component';
import { BadgeItemComponent} from './navigation/badge-item/badge-item.component';
import { SideMenuComponent} from './navigation/menus/side-menu/side-menu.component';
import { ShowHidePaneComponent} from './data-visualisation/show-hide-pane/show-hide-pane.component';
import { StartBarComponent} from './navigation/start-bar/start-bar.component';
import { CompletedBarComponent} from './navigation/completed-bar/completed-bar.component';
import { NoticeComponent } from './banners/notice/notice.component';

const module = angular.module('govuk-single-page-pdk.components', ['ngAnimate'])

  .filter('toBytes', toBytes)
  .filter('noFileType', noFileType)
  .filter('toFileType', toFileType)

  .component('govActionPane', ActionPaneComponent)
  .component('govBreadcrumbs', BreadcrumbsComponent)
  .component('govHeader', GovUkHeaderComponent)
  .component('govPageTitle', PageTitleComponent)
  .component('govPersonalDetails', PersonalDetailsComponent)
  .component('govContactInfo', ContactInfoComponent)
  .component('govMediaIcon', MediaIconComponent)
  .component('govPhaseBanner', PhaseBannerComponent)
  .component('govPersistInfoBanner', PersistInfoComponent)
  .component('govArrow', ArrowComponent)
  .component('govNextPreviousNavigation', NextPreviousNavigationComponent)
  .component('govSummaryItem', SummaryItemComponent)
  .component('govDayItem', DayItemComponent)
  .component('govTimeline', TimelineComponent)
  .component('govImage', ImageComponent)
  .component('govStatement', StatementComponent)
  .component('govDigitBox', DigitBoxComponent)
  .component('govHighlightText', HighlightTextComponent)
  .component('govVideo', VideoComponent)
  .component('govTab', TabComponent)
  .component('govTabset', TabsetComponent)
  .component('govNotification', NotificationComponent)
  .component('govFooter', FooterComponent)
  .component('govBadgeItem', BadgeItemComponent)
  .component('govSideMenu', SideMenuComponent)
  .component('govShowHidePane', ShowHidePaneComponent)
  .component('govSideMenu', SideMenuComponent).component('govStartBar', StartBarComponent)
  .component('govCompletedBar', CompletedBarComponent)
  .component('govNotice', NoticeComponent);

export const components: string = module.name;