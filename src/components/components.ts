import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { GovUkHeaderComponent } from './headers/govuk/govuk-header.component';
import { PhaseBannerComponent } from './banners/phase-banner/phase-banner.component';
import { ActionPaneComponent } from './action-pane/action-pane.component';
import { PersistInfoComponent} from './banners/persist-info/persist-info.component';

const module = angular.module('govuk-single-page-pdk.components', ['ui.router'])

  .component('govActionPane', ActionPaneComponent)
  .component('govBreadcrumbs', BreadcrumbsComponent)
  .component('govHeader', GovUkHeaderComponent)
  .component('govPhaseBanner', PhaseBannerComponent)
  .component('govPersistInfoBanner', PersistInfoComponent);

export const components: string = module.name;