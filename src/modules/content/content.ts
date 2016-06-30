import { FocusDirective } from './form-elements/focus/focus.directive';
import { LazyValidationDirective } from '../components/forms-and-errors/lazy-validation/lazy-validation.directive';
import { LazyValidationOnClickDirective }
    from '../components/forms-and-errors/lazy-validation/lazy-validation-on-click.directive';

const module = angular.module('govuk-single-page-pdk.content', [])

  .directive('blockLabel', FocusDirective)
  .directive('lazyValidation', LazyValidationDirective)
  .directive('lazyValidationOnClick', LazyValidationOnClickDirective);

export const content = module.name;