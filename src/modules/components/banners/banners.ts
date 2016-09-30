import { HighlightTextComponent } from './highlight-text/highlight-text.component';
import { NoticeComponent } from './notice/notice.component';
import { NotificationComponent } from './notification/notification.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PersistInfoComponent} from './persist-info/persist-info.component';
import { PhaseBannerComponent } from './phase-banner/phase-banner.component';
import { WarningBannerComponent } from './warning/warning-banner.component';

const module = angular.module('govuk-single-page-pdk.components.banners', [])

  .component('govHighlightText', HighlightTextComponent)
  .component('govNotice', NoticeComponent)
  .component('govNotification', NotificationComponent)
  .component('govPageTitle', PageTitleComponent)
  .component('govPersistInfoBanner', PersistInfoComponent)
  .component('govPhaseBanner', PhaseBannerComponent)
  .component('govWarningBanner', WarningBannerComponent);

export default module.name;