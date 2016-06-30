import { components } from './components';
import { docsUtils } from '../../util/docs';

import { BreadcrumbsDemo } from './navigation/breadcrumbs/breadcrumbs.demo';
import { GovUkHeaderDemo } from './headers-and-footers/header/header.demo.ts';
import { PhaseBannerDemo } from './banners/phase-banner/phase-banner.demo';
import { PageTitleDemo } from './banners/page-title/page-title.demo';
import { ActionPaneDemo } from './navigation/action-pane/action-pane.demo';
import { PersistInfoDemo } from './banners/persist-info/persist-info.demo';
import { PersonalDetailsDemo } from './data-visualisation/personal-details/personal-details.demo';
import { ContactInfoDemo} from './data-visualisation/contact-info/contact-info.demo';
import { NextPreviousNavigationDemo }
    from './navigation/next-previous-navigation/next-previous-navigation.demo';
import { SummaryItemDemo} from './data-visualisation/summary-item/summary-item.demo';
import { TimelineDemo } from './timeline/timeline/timeline.demo';
import { ImageDemoComponent } from './media/image/image.demo';
import { StatementDemo } from './media/statement/statement.demo';
import { DigitBoxDemo } from './data-visualisation/digit-box/digit-box.demo';
import { HighlightTextDemo } from './banners/highlight-text/highlight-text.demo';
import { AlertDemo } from './banners/alert/alert.demo';
import { NotificationDemo } from './banners/notification/notification.demo';
import { TabDemo } from './data-visualisation/tab/tab.demo';
import { FooterDemo } from './headers-and-footers/footer/footer.demo';
import { BadgeItemDemo} from './navigation/badge-item/badge-item.demo';
import { SideMenuDemo} from './navigation/menus/side-menu/side-menu.demo';
import { ShowHidePaneDemo} from './data-visualisation/show-hide-pane/show-hide-pane.demo';
import { StartBarDemo} from './navigation/start-bar/start-bar.demo';
import { CompletedBarDemo} from './navigation/completed-bar/completed-bar.demo';
import { NoticeDemo } from './banners/notice/notice.demo';
import { ProgressListDemo } from './data-visualisation/progress-list/progress-list.demo';
import { ErrorSummaryDemo } from './forms-and-errors/error-summary/error-summary.demo';

const module = angular.module('govuk-single-page-pdk.components-demos', [
  components,
  docsUtils
])
  .component('govActionPaneDemo', ActionPaneDemo)
  .component('govBreadcrumbsDemo', BreadcrumbsDemo)
  .component('govHeaderDemo', GovUkHeaderDemo)
  .component('govPageTitleDemo', PageTitleDemo)
  .component('govPersonalDetailsDemo', PersonalDetailsDemo)
  .component('govPhaseBannerDemo', PhaseBannerDemo)
  .component('govContactInfoDemo', ContactInfoDemo)
  .component('govPersistInfoBannerDemo', PersistInfoDemo)
  .component('govNextPreviousNavigationDemo', NextPreviousNavigationDemo)
  .component('govSummaryItemDemo', SummaryItemDemo)
  .component('govTimelineDemo', TimelineDemo)
  .component('govImageDemo', ImageDemoComponent)
  .component('govStatementDemo', StatementDemo)
  .component('govDigitBoxDemo', DigitBoxDemo)
  .component('govHighlightTextDemo', HighlightTextDemo)
  .component('govAlertDemo', AlertDemo)
  .component('govNotificationDemo', NotificationDemo)
  .component('govTabDemo', TabDemo)
  .component('govFooterDemo', FooterDemo)
  .component('govBadgeItemDemo', BadgeItemDemo)
  .component('govSideMenuDemo', SideMenuDemo)
  .component('govShowHidePaneDemo', ShowHidePaneDemo)
  .component('govStartBarDemo', StartBarDemo)
  .component('govCompletedBarDemo', CompletedBarDemo)
  .component('govNoticeDemo', NoticeDemo)
  .component('govProgressListDemo', ProgressListDemo)
  .component('govErrorSummaryDemo', ErrorSummaryDemo);

export const componentsDemos = module.name;