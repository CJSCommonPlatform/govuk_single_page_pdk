import { DayItemComponent } from './day-item/day-item.component';
import { TimelineComponent } from './timeline/timeline.component';


const module = angular.module('govuk-single-page-pdk.components.timeline', [])

  .component('govDayItem', DayItemComponent)
  .component('govTimeline', TimelineComponent);

export default module.name;