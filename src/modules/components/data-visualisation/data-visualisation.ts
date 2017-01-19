import 'angular-slugify';

const module = angular.module('govuk-single-page-pdk.components.data-visualisation', [
  'ngAnimate',
  'slugifier'
]);

// Legacy

import { PersonalDetailsComponent } from './personal-details/personal-details.component';

import { DeprecatedDigitBoxComponent } from './digit-box-deprecated/digit-box.component';
import { FiltersComponent } from './filters/filters.component';
import { ProgressListComponent } from './progress-list/progress-list.component';
import { DatasetComponent } from './dataset/dataset.component';

module
  .component('govPersonalDetails', PersonalDetailsComponent)
  .component('govDigitBox', DeprecatedDigitBoxComponent)
  .component('govFilters', FiltersComponent)
  .component('govProgressList', ProgressListComponent)
  .component('govDataset', DatasetComponent);

// Deprecated

import { CaseMarkersComponent } from './case-markers-deprecated/case-markers.component';
import { DeprecatedContactInfoComponent} from './contact-info-deprecated/contact-info.component';
import { DeprecatedTabComponent } from './tab-deprecated/tab.component';
import { DeprecatedTabsPaneComponent} from './tabs-pane-deprecated/tabs-pane.component';
import { DeprecatedTabsetComponent} from './tab-deprecated/tabset.component';
import { ShowHidePaneComponent} from './show-hide-pane-deprecated/show-hide-pane.component';
import { SummaryItemDeprecatedComponent } from './summary-item-deprecated/summary-item.component';

module
  .component('govSummaryItem', SummaryItemDeprecatedComponent)
  .component('govContactInfo', DeprecatedContactInfoComponent)
  .component('govShowHidePane', ShowHidePaneComponent)
  .component('govTab', DeprecatedTabComponent)
  .component('govTabsPane', DeprecatedTabsPaneComponent)
  .component('govTabset', DeprecatedTabsetComponent)
  .component('govCaseMarkers', CaseMarkersComponent);

// Latest

import { CollapsibleComponent } from './collapsible/collapsible.component';
import { CollapseDirective } from './collapsible/collapse.directive';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { DigitBoxComponent } from './digit-box/digit-box.component';
import { SummaryItemComponent } from './summary-item/summary-item.component';
import { TabComponent, TranscludeTabHeadingDirective } from './tabs/tab.component';
import { TabsetComponent } from './tabs/tabset.component';
import { TagComponent } from './tag/tag.component';

module
  .component('pdkCollapsible', CollapsibleComponent)
  .component('pdkContactInfo', ContactInfoComponent)
  .component('pdkDigitBox', DigitBoxComponent)
  .component('pdkSummaryItem', SummaryItemComponent)
  .component('pdkTab', TabComponent)
  .component('pdkTabset', TabsetComponent)
  .component('pdkTag', TagComponent)
  .directive('collapse', CollapseDirective)
  .directive('transcludeTabHeading', TranscludeTabHeadingDirective);

export default module.name;