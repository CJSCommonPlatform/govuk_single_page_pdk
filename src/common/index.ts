import {ServiceA} from './services/service-a';
import {DirectiveA} from './directives/directive-a';
import {filterA} from './filters/filter-a';

const module = angular.module('govuk_single_page.core', [])
  .filter('filterA', filterA)
  .service('ServiceA', ServiceA)
  .directive('directiveA', DirectiveA);

export const common = module.name;