import {ComponentTwoOne} from './components/cmp-2.1/cmp-2.1';
import {PageComponentTwoOne} from './page-2.1/page-cmp-2.1';
import {filterTwoOne} from './filters/filter-2.1';

const module = angular.module('ngGovExample.domain-2', [])

  .component('pageComponentTwoOne', PageComponentTwoOne)
  .component('componentTwoOne', ComponentTwoOne)
  .filter('filterTwoOne', filterTwoOne);

export const content: string = module.name;