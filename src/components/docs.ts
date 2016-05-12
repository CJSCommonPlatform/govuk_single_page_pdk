import { docsUtils } from '../util/docs';
import { ComponentsIndexComponent } from './index/index.component';
import { BreadcrumbsDemo } from './breadcrumbs/breadcrumbs.demo';
import { GovUkHeaderDemo } from './headers/govuk/govuk-header.demo';
import { PhaseBannerDemo } from './phase-banner/phase-banner.demo';
import { ActionPaneDemo } from './action-pane/action-pane.demo';
import { PersonalDetailsDemo } from './personal-details/personal-details.demo';

const module = angular.module('govuk-single-page-pdk.components-docs', [docsUtils])

  .component('govDocsComponentsPage', ComponentsIndexComponent)
  .component('govActionPaneDemo', ActionPaneDemo)
  .component('govBreadcrumbsDemo', BreadcrumbsDemo)
  .component('govHeaderDemo', GovUkHeaderDemo)
  .component('govPhaseBannerDemo', PhaseBannerDemo)
  .component('govPersonalDetailsDemo', PersonalDetailsDemo);

export const componentsDocs = module.name;