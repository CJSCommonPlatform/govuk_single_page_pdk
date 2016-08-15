import dataVisualisation from './data-visualisation';
import docsUtils from '../../../util/docs';

import { ContactInfoDemo} from './contact-info/contact-info.demo';
import { DigitBoxDemo } from './digit-box/digit-box.demo';
import { PersonalDetailsDemo } from './personal-details/personal-details.demo';
import { ProgressListDemo } from './progress-list/progress-list.demo';
import { ShowHidePaneDemo} from './show-hide-pane/show-hide-pane.demo';
import { SummaryItemDemo} from './summary-item/summary-item.demo';
import { TabDemo } from './tab/tab.demo';
import { DatasetDemo } from './dataset/dataset.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.data-visualisation', [
  dataVisualisation,
  docsUtils
])
  .component('govContactInfoDemo', ContactInfoDemo)
  .component('govDigitBoxDemo', DigitBoxDemo)
  .component('govPersonalDetailsDemo', PersonalDetailsDemo)
  .component('govProgressListDemo', ProgressListDemo)
  .component('govShowHidePaneDemo', ShowHidePaneDemo)
  .component('govSummaryItemDemo', SummaryItemDemo)
  .component('govTabDemo', TabDemo)
  .component('govDatasetDemo', DatasetDemo);

export default module.name;
