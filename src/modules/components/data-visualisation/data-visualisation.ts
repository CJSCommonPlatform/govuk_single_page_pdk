import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactInfoComponent} from './contact-info/contact-info.component';
import { SummaryItemComponent} from './summary-item/summary-item.component';
import { DigitBoxComponent } from './digit-box/digit-box.component';
import { TabComponent } from './tab/tab.component';
import { TabsPaneComponent} from './tabs-pane/tabs-pane.component';
import { TabsetComponent} from './tab/tabset.component';
import { ShowHidePaneComponent} from './show-hide-pane/show-hide-pane.component';
import { ProgressListComponent } from './progress-list/progress-list.component';
import { DatasetComponent } from './dataset/dataset.component';

const module = angular.module('govuk-single-page-pdk.components.data-visualisation', [
    'ngAnimate',
    'slugifier'
])

  .component('govPersonalDetails', PersonalDetailsComponent)
  .component('govContactInfo', ContactInfoComponent)
  .component('govSummaryItem', SummaryItemComponent)
  .component('govDigitBox', DigitBoxComponent)
  .component('govTab', TabComponent)
  .component('govTabsPane', TabsPaneComponent)
  .component('govTabset', TabsetComponent)
  .component('govShowHidePane', ShowHidePaneComponent)
  .component('govProgressList', ProgressListComponent)
  .component('govDataset', DatasetComponent);

export default module.name;
