import { components } from './components';
import { docsUtils } from '../../util/docs';

import { BreadcrumbsDemo } from './navigation/breadcrumbs/breadcrumbs.demo';
import { GovUkHeaderDemo } from './headers/govuk/govuk-header.demo';
import { PhaseBannerDemo } from './banners/phase-banner/phase-banner.demo';
import { PageTitleDemo } from './banners/page-title/page-title.demo';
import { ActionPaneDemo } from './navigation/action-pane/action-pane.demo';
import { PersistInfoDemo } from './banners/persist-info/persist-info.demo';
import { PersonalDetailsDemo } from './data-visualisation/personal-details/personal-details.demo';
import { ContactInfoDemo} from './data-visualisation/contact-info/contact-info.demo';
import { NextPreviousNavigationDemo }
    from './navigation/next-previous-navigation/next-previous-navigation.demo';
import { SummaryItemDemo} from './data-visualisation/summary-item/summary-item.demo';
import { TimelineDemo } from './timeline/timeline/timeline.demo';
import { ImageDemoComponent } from './image/image.demo';
import { StatementDemo } from './media/statement/statement.demo';
import { DigitBoxDemo } from './data-visualisation/digit-box/digit-box.demo';
import { HighlightTextDemo } from './banners/highlight-text/highlight-text.demo';
import { AlertDemo } from './banners/alert/alert.demo';

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
  .component('govSummaryItemDemo', SummaryItemDemo)
  .component('govTimelineDemo', TimelineDemo)
  .component('govImageDemo', ImageDemoComponent)
  .component('govStatementDemo', StatementDemo)
  .component('govDigitBoxDemo', DigitBoxDemo)
  .component('govHighlightTextDemo', HighlightTextDemo)
  .component('govAlertDemo', AlertDemo);

export const componentsDemos = module.name;