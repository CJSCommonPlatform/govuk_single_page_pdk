"use strict";
var personal_details_component_1 = require('./personal-details/personal-details.component');
var contact_info_component_1 = require('./contact-info/contact-info.component');
var summary_item_component_1 = require('./summary-item/summary-item.component');
var digit_box_component_1 = require('./digit-box/digit-box.component');
var tab_component_1 = require('./tab/tab.component');
var tabs_pane_component_1 = require('./tabs-pane/tabs-pane.component');
var tabset_component_1 = require('./tab/tabset.component');
var show_hide_pane_component_1 = require('./show-hide-pane/show-hide-pane.component');
var progress_list_component_1 = require('./progress-list/progress-list.component');
var dataset_component_1 = require('./dataset/dataset.component');
var module = angular.module('govuk-single-page-pdk.components.data-visualisation', ['ngAnimate'])
    .component('govPersonalDetails', personal_details_component_1.PersonalDetailsComponent)
    .component('govContactInfo', contact_info_component_1.ContactInfoComponent)
    .component('govSummaryItem', summary_item_component_1.SummaryItemComponent)
    .component('govDigitBox', digit_box_component_1.DigitBoxComponent)
    .component('govTab', tab_component_1.TabComponent)
    .component('govTabsPane', tabs_pane_component_1.TabsPaneComponent)
    .component('govTabset', tabset_component_1.TabsetComponent)
    .component('govShowHidePane', show_hide_pane_component_1.ShowHidePaneComponent)
    .component('govProgressList', progress_list_component_1.ProgressListComponent)
    .component('govDataset', dataset_component_1.DatasetComponent);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=data-visualisation.js.map