/* tslint:disable:max-line-length */

import { ActionPaneComponent } from './navigation/action-pane/action-pane.component';
import { BreadcrumbsComponent } from './navigation/breadcrumbs/breadcrumbs.component';
import { GovUkHeaderComponent } from './headers/govuk/govuk-header.component';
import { PageTitleComponent } from './banners/page-title/page-title.component';
import { PersistInfoComponent} from './banners/persist-info/persist-info.component';
import { PersonalDetailsComponent } from './data-visualisation/personal-details/personal-details.component';
import { ContactInfoComponent} from './data-visualisation/contact-info/contact-info.component';
import { PhaseBannerComponent } from './banners/phase-banner/phase-banner.component';
import { ArrowComponent } from './navigation/arrow/arrow.component';
import { NextPreviousNavigationComponent }
    from './navigation/next-previous-navigation/next-previous-navigation.component';
import { SummaryItemComponent} from './data-visualisation/summary-item/summary-item.component';
import { DayItemComponent } from './timeline/day-item/day-item.component';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { ImageComponent } from './image/image.component';
import { StatementComponent } from './media/statement/statement.component';
import { MediaIconComponent } from './media/media-icon/media-icon.component';
import { toBytes } from './media/filters/toBytes.filter';
import { noFileType } from './media/filters/noFileType.filter';
import { toFileType } from './media/filters/toFileType.filter';

const module = angular.module('govuk-single-page-pdk.components', [])

  .filter('toBytes', toBytes)
  .filter('noFileType', noFileType)
  .filter('toFileType', toFileType)

  .component('govActionPane', ActionPaneComponent)
  .component('govBreadcrumbs', BreadcrumbsComponent)
  .component('govHeader', GovUkHeaderComponent)
  .component('govPageTitle', PageTitleComponent)
  .component('govPersonalDetails', PersonalDetailsComponent)
  .component('govContactInfo', ContactInfoComponent)
  .component('govMediaIcon', MediaIconComponent)
  .component('govPhaseBanner', PhaseBannerComponent)
  .component('govPersistInfoBanner', PersistInfoComponent)
  .component('govArrow', ArrowComponent)
  .component('govNextPreviousNavigation', NextPreviousNavigationComponent)
  .component('govSummaryItem', SummaryItemComponent)
  .component('govDayItem', DayItemComponent)
  .component('govTimeline', TimelineComponent)
  .component('govImage', ImageComponent)
  .component('govStatement', StatementComponent)
  .component('govSummaryItem', SummaryItemComponent);

export const components: string = module.name;