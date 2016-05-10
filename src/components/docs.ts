import { ComponentsIndexComponent } from './index/index.component';
import { BreadcrumbsDemo } from './breadcrumbs/breadcrumbs.demo';
import { HeaderDemo } from './header/header.demo';

const module = angular.module('govuk-single-page-sdk.components-docs', [])

  .component('componentsIndexPage', ComponentsIndexComponent)
  .component('govBreadcrumbsDemo', BreadcrumbsDemo)
  .component('govHeaderDemo', HeaderDemo);

export const componentsDocs = module.name;