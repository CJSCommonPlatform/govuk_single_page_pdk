import { ErrorMessageComponent } from './error-message/error-message.component';
import { ErrorSummaryComponent } from './error-summary/error-summary.component';
import { LazyValidationDirective } from './lazy-validation/lazy-validation.directive';
import { LazyValidationOnClickDirective } from './lazy-validation/lazy-validation-on-click.directive';
import { SearchComponent } from './search/search.component';

const module = angular.module('govuk-single-page-pdk.components.forms-errors', [])

  .component('govErrorMessage', ErrorMessageComponent)
  .component('govErrorSummary', ErrorSummaryComponent)
  .component('govSearch', SearchComponent)
  .directive('lazyValidation', LazyValidationDirective)
  .directive('lazyValidationOnClick', LazyValidationOnClickDirective);

export default module.name;