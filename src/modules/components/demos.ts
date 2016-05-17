import { components } from './components';
import { docsUtils } from '../../util/docs';

import { BreadcrumbsDemo } from './breadcrumbs/breadcrumbs.demo';
import { GovUkHeaderDemo } from './headers/govuk/govuk-header.demo';
import { PhaseBannerDemo } from './banners/phase-banner/phase-banner.demo';
import { PageTitleDemo } from './banners/page-title/page-title.demo';
import { ActionPaneDemo } from './action-pane/action-pane.demo';
import { PersistInfoDemo } from './banners/persist-info/persist-info.demo';
import { PersonalDetailsDemo } from './personal-details/personal-details.demo';
import { ContactInfoDemo} from './contact-info/contact-info.demo';
import { ArrowComponent } from './navigations/arrow/arrow.component';
import { NextPreviousNavigationDemo }
    from './navigations/next-previous-navigation/next-previous-navigation.demo';
import { SummaryItemDemo} from './summary-item/summary-item.demo';

const module = angular.module('govuk-single-page-pdk.components-demos', [
  components,
  docsUtils
])
  .component('govActionPaneDemo', ActionPaneDemo)
  .component('govBreadcrumbsDemo', BreadcrumbsDemo)
  .component('govHeaderDemo', GovUkHeaderDemo)
  .component('govPageTitleDemo', PageTitleDemo)
  .component('govPersonalDetailsDemo', PersonalDetailsDemo)
  .component('govPhaseBannerDemo', PhaseBannerDemo)
  .component('govContactInfoDemo', ContactInfoDemo)
  .component('govPersistInfoBannerDemo', PersistInfoDemo)
  .component('govNextPreviousNavigationDemo', NextPreviousNavigationDemo)
  .component('govSummaryItemDemo', SummaryItemDemo);

export const componentsDemos = module.name;