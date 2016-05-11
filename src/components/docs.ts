import { ComponentsIndexComponent } from './index/index.component';
import { BreadcrumbsDemo } from './breadcrumbs/breadcrumbs.demo';
import { GovUkHeaderDemo } from './headers/govuk/govuk-header.demo';
import { PhaseBannerDemo } from './phase-banner/phase-banner.demo';

const module = angular.module('govuk-single-page-pdk.components-docs', [])

  .component('componentsIndexPage', ComponentsIndexComponent)
  .component('govBreadcrumbsDemo', BreadcrumbsDemo)
  .component('govHeaderDemo', GovUkHeaderDemo)
  .component('govPhaseBannerDemo', PhaseBannerDemo);

export const componentsDocs = module.name;