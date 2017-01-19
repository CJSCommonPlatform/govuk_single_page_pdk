import { HighlightTextComponent } from './highlight-text/highlight-text.component';
import { DeprecatedNoticeComponent } from './notice-deprecated/notice.component';
import { AlertComponent, AlertContainerComponent, AlertContentComponent } from './alert/alert.component';
import { DeprecatedNotificationComponent } from './notification-deprecated/notification.component';
import { DeprecatedPageTitleComponent } from './page-title-deprecated/page-title.component';
import { PersistInfoComponent} from './persist-info/persist-info.component';
import { DeprecatedPhaseBannerComponent } from './phase-banner-deprecated/phase-banner.component';
import { DeprecatedWarningBannerComponent } from './warning-deprecated/warning-banner.component';
import { NotificationComponent } from './notification/notification.component';
import { NoticeComponent } from './notice/notice.component';
import { PhaseBannerComponent } from './phase-banner/phase-banner.component';
import { StatusLabelComponent } from './status-label/status-label.component';
import { PageTitleComponent } from './page-title/page-title.component';

const module = angular.module('govuk-single-page-pdk.components.banners', [])

  .component('govHighlightText', HighlightTextComponent)
  .component('govNotice', DeprecatedNoticeComponent)
  .component('govNotification', DeprecatedNotificationComponent)
  .component('govPageTitle', DeprecatedPageTitleComponent)
  .component('govPersistInfoBanner', PersistInfoComponent)
  .component('govPhaseBanner', DeprecatedPhaseBannerComponent)
  .component('govWarningBanner', DeprecatedWarningBannerComponent)

  .component('pdkAlert', AlertComponent)
  .component('pdkAlertContainer', AlertContainerComponent)
  .component('pdkAlertContent', AlertContentComponent)
  .component('pdkNotice', NoticeComponent)
  .component('pdkNotification', NotificationComponent)
  .component('pdkPageTitle', PageTitleComponent)
  .component('pdkPhaseBanner', PhaseBannerComponent)
  .component('pdkStatusLabel', StatusLabelComponent);

export default module.name;