import banners from './banners';
import docsUtils from '../../../util/docs';

import { AlertDemo } from './alert/alert.demo';
import { HighlightTextDemo } from './highlight-text/highlight-text.demo';
import { NoticeDemo } from './notice/notice.demo';
import { NotificationDemo } from './notification/notification.demo';
import { PageTitleDemo } from './page-title/page-title.demo';
import { PersistInfoDemo } from './persist-info/persist-info.demo';
import { PhaseBannerDemo } from './phase-banner/phase-banner.demo';
import { WarningBannerDemo } from './warning/warning-banner.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.banners', [
  banners,
  docsUtils
])
  .component('govPageTitleDemo', PageTitleDemo)
  .component('govPhaseBannerDemo', PhaseBannerDemo)
  .component('govPersistInfoBannerDemo', PersistInfoDemo)
  .component('govHighlightTextDemo', HighlightTextDemo)
  .component('govAlertDemo', AlertDemo)
  .component('govNotificationDemo', NotificationDemo)
  .component('govNoticeDemo', NoticeDemo)
  .component('govWarningBannerDemo', WarningBannerDemo);

export default module.name;