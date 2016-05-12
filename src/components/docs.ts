import { components } from './components';
import { docsUtils } from '../util/docs';

import { ComponentsIndexComponent } from './index/index.component';
import { BreadcrumbsDemo } from './breadcrumbs/breadcrumbs.demo';
import { GovUkHeaderDemo } from './headers/govuk/govuk-header.demo';
import { PhaseBannerDemo } from './banners/phase-banner/phase-banner.demo';
import { ActionPaneDemo } from './action-pane/action-pane.demo';
import { PersistInfoDemo } from './banners/persist-info/persist-info.demo';
import { PersonalDetailsDemo } from './personal-details/personal-details.demo';
import { ContactInfoDemo} from './contact-info/contact-info.demo';

const module = angular.module('govuk-single-page-pdk.components-docs', [
  components,
  docsUtils
])
  .component('govDocsComponentsPage', ComponentsIndexComponent)
  .component('govActionPaneDemo', ActionPaneDemo)
  .component('govBreadcrumbsDemo', BreadcrumbsDemo)
  .component('govHeaderDemo', GovUkHeaderDemo)
  .component('govPersonalDetailsDemo', PersonalDetailsDemo)
  .component('govPhaseBannerDemo', PhaseBannerDemo)
  .component('govContactInfoDemo', ContactInfoDemo)
  .component('govPersistInfoBannerDemo', PersistInfoDemo);

export const componentsDocs = module.name;