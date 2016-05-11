import { ComponentsIndexComponent } from './index/index.component';
import { BreadcrumbsDemo } from './breadcrumbs/breadcrumbs.demo';
import { HeaderGovukDemo } from './headers/govuk/header.govuk.demo';

const module = angular.module('govuk-single-page-pdk.components-docs', [])

  .component('componentsIndexPage', ComponentsIndexComponent)
  .component('govBreadcrumbsDemo', BreadcrumbsDemo)
  .component('govHeaderDemo', HeaderGovukDemo);

export const componentsDocs = module.name;
