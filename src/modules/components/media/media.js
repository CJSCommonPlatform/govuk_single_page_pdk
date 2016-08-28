"use strict";
var image_component_1 = require('./image/image.component');
var media_icon_component_1 = require('./media-icon/media-icon.component');
var statement_component_1 = require('./statement/statement.component');
var video_component_1 = require('./video/video.component');
var toBytes_filter_1 = require('./filters/toBytes.filter');
var noFileType_filter_1 = require('./filters/noFileType.filter');
var toFileType_filter_1 = require('./filters/toFileType.filter');
var module = angular.module('govuk-single-page-pdk.components.media', [])
    .filter('toBytes', toBytes_filter_1.toBytes)
    .filter('noFileType', noFileType_filter_1.noFileType)
    .filter('toFileType', toFileType_filter_1.toFileType)
    .component('govMediaIcon', media_icon_component_1.MediaIconComponent)
    .component('govImage', image_component_1.ImageComponent)
    .component('govStatement', statement_component_1.StatementComponent)
    .component('govVideo', video_component_1.VideoComponent);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=media.js.map