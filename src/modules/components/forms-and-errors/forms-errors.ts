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

import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { ContainerComponent, LabelComponent } from './components/form-components';
import { DeprecatedSearchComponent } from './search-deprecated/search.component';
import { ResizeDirective } from './textarea/resize.directive';


const module = angular.module('govuk-single-page-pdk.components.forms-errors', [
  coreModule,
  'ngMessages'
])
  .directive('pdkResize', ResizeDirective)
  .component('pdkFormGroup', ContainerComponent)
  .component('pdkLabel', LabelComponent)
  .component('pdkSearch', SearchComponent)
  .directive('blockLabel', BlockLabelDirective)

  .component('pdkCurrencyInput', CurrencyInputComponent)
  .component('pdkDurationInput', DurationInputComponent)
  .component('pdkDateInput', DateInputComponent)
  .component('pdkTimeInput', TimeInputComponent)
  .component('pdkErrorMessage', ErrorMessageComponent)

  .component('govErrorSummaryItem', ErrorSummaryItemComponent)
  .component('govErrorSummary', ErrorSummaryComponent)
  .component('govSearch', DeprecatedSearchComponent)
  .component('govActionBar', ActionBarComponent)
  .directive('inputNumber', InputNumberDirective)
  .directive('lazyValidation', LazyValidationDirective)
  .directive('lazyValidationOnClick', LazyValidationOnClickDirective)

  // deprecated
  .component('govDateInput', DateInputComponent)
  .component('govErrorMessage', DeprecatedErrorMessageComponent);

export default module.name;

