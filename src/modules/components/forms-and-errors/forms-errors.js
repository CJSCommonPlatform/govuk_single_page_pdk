"use strict";
var date_input_component_1 = require('./date-input/date-input.component');
var error_message_component_1 = require('./error-message/error-message.component');
var error_summary_component_1 = require('./error-summary/error-summary.component');
var error_summary_item_component_1 = require('./error-summary/error-summary-item.component');
var input_number_directive_1 = require('./input-number/input-number.directive');
var lazy_validation_directive_1 = require('./lazy-validation/lazy-validation.directive');
var lazy_validation_on_click_directive_1 = require('./lazy-validation/lazy-validation-on-click.directive');
var search_component_1 = require('./search/search.component');
var action_bar_component_1 = require('./action-bar/action-bar.component');
var module = angular.module('govuk-single-page-pdk.components.forms-errors', [])
    .component('govDateInput', date_input_component_1.DateInputComponent)
    .component('govErrorMessage', error_message_component_1.ErrorMessageComponent)
    .component('govErrorSummaryItem', error_summary_item_component_1.ErrorSummaryItemComponent)
    .component('govErrorSummary', error_summary_component_1.ErrorSummaryComponent)
    .component('govSearch', search_component_1.SearchComponent)
    .component('govActionBar', action_bar_component_1.ActionBarComponent)
    .directive('inputNumber', input_number_directive_1.InputNumberDirective)
    .directive('lazyValidation', lazy_validation_directive_1.LazyValidationDirective)
    .directive('lazyValidationOnClick', lazy_validation_on_click_directive_1.LazyValidationOnClickDirective);
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=forms-errors.js.map