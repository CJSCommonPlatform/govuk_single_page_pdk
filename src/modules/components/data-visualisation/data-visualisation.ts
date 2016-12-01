import 'angular-slugify';

const module = angular.module('govuk-single-page-pdk.components.data-visualisation', [
  'ngAnimate',
  'slugifier'
]);


// Legacy

import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactInfoComponent} from './contact-info/contact-info.component';
import { DigitBoxComponent } from './digit-box/digit-box.component';
import { FiltersComponent } from './filters/filters.component';
import { DeprecatedTabComponent } from './tab-deprecated/tab.component';
import { DeprecatedTabsPaneComponent} from './tabs-pane-deprecated/tabs-pane.component';
import { DeprecatedTabsetComponent} from './tab-deprecated/tabset.component';
import { ProgressListComponent } from './progress-list/progress-list.component';
import { DatasetComponent } from './dataset/dataset.component';
import { CaseMarkersComponent } from './case-markers/case-markers.component';

module
  .component('govPersonalDetails', PersonalDetailsComponent)
  .component('govContactInfo', ContactInfoComponent)
  .component('govDigitBox', DigitBoxComponent)
  .component('govFilters', FiltersComponent)
  .component('govProgressList', ProgressListComponent)
  .component('govDataset', DatasetComponent)
  .component('govCaseMarkers', CaseMarkersComponent);


// Deprecated

import { SummaryItemDeprecatedComponent } from './summary-item-deprecated/summary-item.component';
import { ShowHidePaneComponent} from './show-hide-pane-deprecated/show-hide-pane.component';

module
  .component('govSummaryItem', SummaryItemDeprecatedComponent)
  .component('govShowHidePane', ShowHidePaneComponent)
  .component('govTab', DeprecatedTabComponent)
  .component('govTabsPane', DeprecatedTabsPaneComponent)
  .component('govTabset', DeprecatedTabsetComponent);

// Latest

import { CollapsibleComponent } from './collapsible/collapsible.component';
import { CollapseDirective } from './collapsible/collapse.directive';
import { SummaryItemComponent } from './summary-item/summary-item.component';
import { TabComponent, TranscludeTabHeadingDirective } from './tabs/tab.component';
import { TabsetComponent } from './tabs/tabset.component';

module
  .component('pdkCollapsible', CollapsibleComponent)
  .component('pdkSummaryItem', SummaryItemComponent)
  .component('pdkTab', TabComponent)
  .component('pdkTabset', TabsetComponent)
  .directive('collapse', CollapseDirective)
  .directive('transcludeTabHeading', TranscludeTabHeadingDirective);

export default module.name;