"use strict";
var docs_1 = require('../../../util/docs');
var forms_errors_1 = require('./forms-errors');
var date_input_demo_1 = require('./date-input/date-input.demo');
var error_message_demo_1 = require('./error-message/error-message.demo');
var error_summary_demo_1 = require('./error-summary/error-summary.demo');
var search_demo_1 = require('./search/search.demo');
var action_bar_demo_1 = require('./action-bar/action-bar.demo');
var module = angular.module('govuk-single-page-pdk.component-demos.forms-errors', [
    forms_errors_1["default"],
    docs_1["default"]
])
    .component('govDateInputDemo', date_input_demo_1.DateInputDemo)
    .component('govErrorMessageDemo', error_message_demo_1.ErrorMessageDemo)
    .component('govErrorSummaryDemo', error_summary_demo_1.ErrorSummaryDemo)
    .component('govSearchDemo', search_demo_1.SearchDemo)
    .component('govActionBarDemo', action_bar_demo_1.ActionBarDemo);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=forms-errors.demos.js.map