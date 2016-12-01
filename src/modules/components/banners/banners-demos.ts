import banners from './banners';
import docsUtils from '../../../util/docs';

import { AlertDocs } from './alert/alert.docs';
import { HighlightTextDemo } from './highlight-text/highlight-text.demo';
import { NoticeDemo } from './notice-deprecated/notice.demo';
import { NotificationDemo } from './notification-deprecated/notification.demo';
import { PageTitleDemo } from './page-title/page-title.demo';
import { PersistInfoDemo } from './persist-info/persist-info.demo';
import { PhaseBannerDemo } from './phase-banner-deprecated/phase-banner.demo';
import { WarningBannerDemo } from './warning-deprecated/warning-banner.demo';
import { NotificationDocs } from './notification/notification.docs';
import { StatusLabelDocs } from './status-label/status-label.docs';
import { PhaseBannerDocs } from './phase-banner/phase-banner.docs';
import { NoticeDocs } from './notice/notice.docs';

const module = angular.module('govuk-single-page-pdk.component-demos.banners', [
  banners,
  docsUtils
])
  .component('govPageTitleDemo', PageTitleDemo)
  .component('govPhaseBannerDemo', PhaseBannerDemo)
  .component('govPersistInfoBannerDemo', PersistInfoDemo)
  .component('govHighlightTextDemo', HighlightTextDemo)
  .component('govNotificationDemo', NotificationDemo)
  .component('govNoticeDemo', NoticeDemo)
  .component('govWarningBannerDemo', WarningBannerDemo)

  .component('alertDocs', AlertDocs)
  .component('noticeDocs', NoticeDocs)
  .component('notificationDocs', NotificationDocs)
  .component('phaseBannerDocs', PhaseBannerDocs)
  .component('statusLabelDocs', StatusLabelDocs);

export default module.name;