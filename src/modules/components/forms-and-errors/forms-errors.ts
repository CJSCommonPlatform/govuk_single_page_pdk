
import { DateInputComponent } from './date-input/date-input.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ErrorSummaryComponent } from './error-summary/error-summary.component';
import { ErrorSummaryItemComponent } from './error-summary/error-summary-item.component';
import { InputNumberDirective } from './input-number/input-number.directive';
import { LazyValidationDirective } from './lazy-validation/lazy-validation.directive';
import { LazyValidationOnClickDirective } from './lazy-validation/lazy-validation-on-click.directive';
import { SearchComponent } from './search/search.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

const module = angular.module('govuk-single-page-pdk.components.forms-errors', [])

  .component('govDateInput', DateInputComponent)
  .component('govErrorMessage', ErrorMessageComponent)
  .component('govErrorSummaryItem', ErrorSummaryItemComponent)
  .component('govErrorSummary', ErrorSummaryComponent)
  .component('govSearch', SearchComponent)
  .component('govActionBar', ActionBarComponent)
  .directive('inputNumber', InputNumberDirective)
  .directive('lazyValidation', LazyValidationDirective)
  .directive('lazyValidationOnClick', LazyValidationOnClickDirective);

export default module.name;

