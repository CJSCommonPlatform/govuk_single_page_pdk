import timeline from './timeline';
import docsUtils from '../../../util/docs';

import { TimelineDemo } from './timeline/timeline.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.timeline', [
  timeline,
  docsUtils
])
  .component('govTimelineDemo', TimelineDemo);

export default module.name;