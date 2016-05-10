import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';

const module = angular.module('govuk-single-page-sdk.components', ['ui.router'])

  .component('govBreadcrumbs', BreadcrumbsComponent)
  .component('govHeader', HeaderComponent);

export const components: string = module.name;