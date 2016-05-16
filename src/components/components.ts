import { ActionPaneComponent } from './action-pane/action-pane.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { GovUkHeaderComponent } from './headers/govuk/govuk-header.component';
import { PageTitleComponent } from './banners/page-title/page-title.component';
import { PersistInfoComponent} from './banners/persist-info/persist-info.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactInfoComponent} from './contact-info/contact-info.component';
import { PhaseBannerComponent } from './banners/phase-banner/phase-banner.component';
import { ArrowComponent } from './navigations/arrow/arrow.component';
import { NextPreviousNavigationComponent }
    from './navigations/next-previous-navigation/next-previous-navigation.component';

const module = angular.module('govuk-single-page-pdk.components', [])

  .component('govActionPane', ActionPaneComponent)
  .component('govBreadcrumbs', BreadcrumbsComponent)
  .component('govHeader', GovUkHeaderComponent)
  .component('govPageTitle', PageTitleComponent)
  .component('govPersonalDetails', PersonalDetailsComponent)
  .component('govContactInfo', ContactInfoComponent)
  .component('govPhaseBanner', PhaseBannerComponent)
  .component('govPersistInfoBanner', PersistInfoComponent)
  .component('govArrow', ArrowComponent)
  .component('govNextPreviousNavigation', NextPreviousNavigationComponent);

export const components: string = module.name;