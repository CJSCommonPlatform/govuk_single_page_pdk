import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderGovukComponent } from './headers/govuk/header.govuk.component';

const module = angular.module('govuk-single-page-pdk.components', ['ui.router'])

  .component('govBreadcrumbs', BreadcrumbsComponent)
  .component('govHeader', HeaderGovukComponent);

export const components: string = module.name;