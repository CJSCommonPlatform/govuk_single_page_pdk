import { FocusDirective } from './form-elements/focus/focus.directive';

const module = angular.module('govuk-single-page-pdk.content', [])

  .directive('blockLabel', FocusDirective);

export const content = module.name;