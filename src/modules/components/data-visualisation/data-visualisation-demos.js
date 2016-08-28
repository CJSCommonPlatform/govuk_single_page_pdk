"use strict";
var data_visualisation_1 = require('./data-visualisation');
var docs_1 = require('../../../util/docs');
var contact_info_demo_1 = require('./contact-info/contact-info.demo');
var digit_box_demo_1 = require('./digit-box/digit-box.demo');
var personal_details_demo_1 = require('./personal-details/personal-details.demo');
var progress_list_demo_1 = require('./progress-list/progress-list.demo');
var show_hide_pane_demo_1 = require('./show-hide-pane/show-hide-pane.demo');
var summary_item_demo_1 = require('./summary-item/summary-item.demo');
var tab_demo_1 = require('./tab/tab.demo');
var dataset_demo_1 = require('./dataset/dataset.demo');
var tabs_pane_demo_1 = require('./tabs-pane/tabs-pane.demo');
var module = angular.module('govuk-single-page-pdk.component-demos.data-visualisation', [
    data_visualisation_1["default"],
    docs_1["default"]
])
    .component('govContactInfoDemo', contact_info_demo_1.ContactInfoDemo)
    .component('govDigitBoxDemo', digit_box_demo_1.DigitBoxDemo)
    .component('govPersonalDetailsDemo', personal_details_demo_1.PersonalDetailsDemo)
    .component('govProgressListDemo', progress_list_demo_1.ProgressListDemo)
    .component('govShowHidePaneDemo', show_hide_pane_demo_1.ShowHidePaneDemo)
    .component('govSummaryItemDemo', summary_item_demo_1.SummaryItemDemo)
    .component('govTabDemo', tab_demo_1.TabDemo)
    .component('govDatasetDemo', dataset_demo_1.DatasetDemo)
    .component('govTabsPaneDemo', tabs_pane_demo_1.TabsPaneDemo);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=data-visualisation-demos.js.map