import dataVisualisation from './data-visualisation';
import docsUtils from '../../../util/docs';

const module = angular.module('govuk-single-page-pdk.component-demos.data-visualisation', [
  dataVisualisation,
  docsUtils
]);

import { ContactInfoDemo} from './contact-info/contact-info.demo';
import { DigitBoxDemo } from './digit-box/digit-box.demo';
import { FiltersDemo } from './filters/filters.demo';
import { PersonalDetailsDemo } from './personal-details/personal-details.demo';
import { ProgressListDemo } from './progress-list/progress-list.demo';
import { TabDemo } from './tab/tab.demo';
import { DatasetDemo } from './dataset/dataset.demo';
import { TabsPaneDemo } from './tabs-pane/tabs-pane.demo';
import { CaseMarkersDemo } from './case-markers/case-markers.demo';

module
  .component('govContactInfoDemo', ContactInfoDemo)
  .component('govDigitBoxDemo', DigitBoxDemo)
  .component('govFiltersDemo', FiltersDemo)
  .component('govPersonalDetailsDemo', PersonalDetailsDemo)
  .component('govProgressListDemo', ProgressListDemo)
  .component('govTabDemo', TabDemo)
  .component('govDatasetDemo', DatasetDemo)
  .component('govTabsPaneDemo', TabsPaneDemo)
  .component('govCaseMarkersDemo', CaseMarkersDemo);

import { CollapsibleDocs } from './collapsible/collapsible.docs';
import { SummaryItemDocs } from './summary-item/summary-item.docs';

module
  .component('collapsibleDocs', CollapsibleDocs)
  .component('summaryItemDocs', SummaryItemDocs);

export default module.name;