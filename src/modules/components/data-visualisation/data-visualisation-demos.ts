import dataVisualisation from './data-visualisation';
import docsUtils from '../../../util/docs';

import { ContactInfoDemo} from './contact-info/contact-info.demo';
import { DigitBoxDemo } from './digit-box/digit-box.demo';
import { FiltersDemo } from './filters/filters.demo';
import { PersonalDetailsDemo } from './personal-details/personal-details.demo';
import { ProgressListDemo } from './progress-list/progress-list.demo';
import { ShowHidePaneDemo} from './show-hide-pane/show-hide-pane.demo';
import { SummaryItemDemo} from './summary-item/summary-item.demo';
import { TabDemo } from './tab/tab.demo';
import { DatasetDemo } from './dataset/dataset.demo';
import { TabsPaneDemo } from './tabs-pane/tabs-pane.demo';
import { CaseMarkersDemo } from './case-markers/case-markers.demo';


const module = angular.module('govuk-single-page-pdk.component-demos.data-visualisation', [
  dataVisualisation,
  docsUtils
])
  .component('govContactInfoDemo', ContactInfoDemo)
  .component('govDigitBoxDemo', DigitBoxDemo)
  .component('govFiltersDemo', FiltersDemo)
  .component('govPersonalDetailsDemo', PersonalDetailsDemo)
  .component('govProgressListDemo', ProgressListDemo)
  .component('govShowHidePaneDemo', ShowHidePaneDemo)
  .component('govSummaryItemDemo', SummaryItemDemo)
  .component('govTabDemo', TabDemo)
  .component('govDatasetDemo', DatasetDemo)
  .component('govTabsPaneDemo', TabsPaneDemo)
  .component('govCaseMarkersDemo', CaseMarkersDemo);

export default module.name;
