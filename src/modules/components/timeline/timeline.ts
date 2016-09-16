import { TimelineComponent } from './timeline/timeline.component';


const module = angular.module('govuk-single-page-pdk.components.timeline', [])
  .component('govTimeline', TimelineComponent);

export default module.name;