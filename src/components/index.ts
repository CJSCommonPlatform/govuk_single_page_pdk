import {PageComponentOneOne} from './page-cmp-1.1';

const module = angular.module('ngGovExample.domain-1', [])

  .component('pageComponentOneOne', PageComponentOneOne);

export const components: string = module.name;