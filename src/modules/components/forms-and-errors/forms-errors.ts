import coreModule from '../../core/core';

import { DateInputComponent } from './date-input/date-input.component';
import { DeprecatedErrorMessageComponent } from './error-message-deprecated/error-message.component';
import { ErrorSummaryComponent } from './error-summary/error-summary.component';
import { ErrorSummaryItemComponent } from './error-summary/error-summary-item.component';
import { InputNumberDirective } from './directives/input-number';
import { BlockLabelDirective } from './directives/block-label';
import { LazyValidationDirective } from './lazy-validation/lazy-validation.directive';
import { LazyValidationOnClickDirective } from './lazy-validation/lazy-validation-on-click.directive';
import { SearchComponent } from './search/search.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

const module = angular.module('govuk-single-page-pdk.components.forms-errors', [
  coreModule,
  'ngMessages'
])

  .directive('blockLabel', BlockLabelDirective)
  .component('pdkDateInput', DateInputComponent)
  .component('pdkErrorMessage', ErrorMessageComponent)

  .component('govErrorSummaryItem', ErrorSummaryItemComponent)
  .component('govErrorSummary', ErrorSummaryComponent)
  .component('govSearch', SearchComponent)
  .component('govActionBar', ActionBarComponent)
  .directive('inputNumber', InputNumberDirective)
  .directive('lazyValidation', LazyValidationDirective)
  .directive('lazyValidationOnClick', LazyValidationOnClickDirective)

  // deprecated
  .component('govDateInput', DateInputComponent)
  .component('govErrorMessage', DeprecatedErrorMessageComponent);

export default module.name;

