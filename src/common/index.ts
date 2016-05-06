import {ComponentA} from '../components/cmp-a/cmp-a';
import {Navbar} from '../components/navbar/navbar';
import {ServiceA} from './services/service-a';
import {DirectiveA} from './directives/directive-a';
import {filterA} from './filters/filter-a';

const module = angular.module('ngGovExample.core', [])
  .filter('filterA', filterA)
  .service('ServiceA', ServiceA)
  .directive('directiveA', DirectiveA)
  .component('componentA', ComponentA)
  .component('navbar', Navbar);

export const common = module.name;