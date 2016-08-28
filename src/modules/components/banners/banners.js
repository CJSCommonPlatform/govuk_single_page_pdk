"use strict";
var highlight_text_component_1 = require('./highlight-text/highlight-text.component');
var notice_component_1 = require('./notice/notice.component');
var notification_component_1 = require('./notification/notification.component');
var page_title_component_1 = require('./page-title/page-title.component');
var persist_info_component_1 = require('./persist-info/persist-info.component');
var phase_banner_component_1 = require('./phase-banner/phase-banner.component');
var module = angular.module('govuk-single-page-pdk.components.banners', [])
    .component('govHighlightText', highlight_text_component_1.HighlightTextComponent)
    .component('govNotice', notice_component_1.NoticeComponent)
    .component('govNotification', notification_component_1.NotificationComponent)
    .component('govPageTitle', page_title_component_1.PageTitleComponent)
    .component('govPersistInfoBanner', persist_info_component_1.PersistInfoComponent)
    .component('govPhaseBanner', phase_banner_component_1.PhaseBannerComponent);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=banners.js.map