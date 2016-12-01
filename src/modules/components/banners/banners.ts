import { HighlightTextComponent } from './highlight-text/highlight-text.component';
import { NoticeComponent } from './notice/notice.component';
import { AlertComponent, AlertContainerComponent, AlertContentComponent } from './alert/alert.component';
import { DeprecatedNotificationComponent } from './notification-deprecated/notification.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PersistInfoComponent} from './persist-info/persist-info.component';
import { PhaseBannerComponent } from './phase-banner/phase-banner.component';
import { DeprecatedWarningBannerComponent } from './warning-deprecated/warning-banner.component';
import { NotificationComponent } from './notification/notification.component';
import { StatusLabelComponent } from './status-label/status-label.component';

const module = angular.module('govuk-single-page-pdk.components.banners', [])

  .component('govHighlightText', HighlightTextComponent)
  .component('govNotice', NoticeComponent)
  .component('govNotification', DeprecatedNotificationComponent)
  .component('govPageTitle', PageTitleComponent)
  .component('govPersistInfoBanner', PersistInfoComponent)
  .component('govPhaseBanner', PhaseBannerComponent)
  .component('govWarningBanner', DeprecatedWarningBannerComponent)

  .component('pdkAlert', AlertComponent)
  .component('pdkAlertContainer', AlertContainerComponent)
  .component('pdkAlertContent', AlertContentComponent)
  .component('pdkNotification', NotificationComponent)
  .component('pdkStatusLabel', StatusLabelComponent);

export default module.name;