import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { GovUkHeaderComponent } from './headers/govuk/govuk-header.component';
import { PhaseBannerComponent } from './phase-banner/phase-banner.component';

const module = angular.module('govuk-single-page-pdk.components', ['ui.router'])

  .component('govBreadcrumbs', BreadcrumbsComponent)
  .component('govHeader', GovUkHeaderComponent)
  .component('govPhaseBanner', PhaseBannerComponent);

export const components: string = module.name;