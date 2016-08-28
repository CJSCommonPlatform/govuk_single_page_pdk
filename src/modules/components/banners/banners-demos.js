"use strict";
var banners_1 = require('./banners');
var docs_1 = require('../../../util/docs');
var alert_demo_1 = require('./alert/alert.demo');
var highlight_text_demo_1 = require('./highlight-text/highlight-text.demo');
var notice_demo_1 = require('./notice/notice.demo');
var notification_demo_1 = require('./notification/notification.demo');
var page_title_demo_1 = require('./page-title/page-title.demo');
var persist_info_demo_1 = require('./persist-info/persist-info.demo');
var phase_banner_demo_1 = require('./phase-banner/phase-banner.demo');
var module = angular.module('govuk-single-page-pdk.component-demos.banners', [
    banners_1["default"],
    docs_1["default"]
])
    .component('govPageTitleDemo', page_title_demo_1.PageTitleDemo)
    .component('govPhaseBannerDemo', phase_banner_demo_1.PhaseBannerDemo)
    .component('govPersistInfoBannerDemo', persist_info_demo_1.PersistInfoDemo)
    .component('govHighlightTextDemo', highlight_text_demo_1.HighlightTextDemo)
    .component('govAlertDemo', alert_demo_1.AlertDemo)
    .component('govNotificationDemo', notification_demo_1.NotificationDemo)
    .component('govNoticeDemo', notice_demo_1.NoticeDemo);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=banners-demos.js.map