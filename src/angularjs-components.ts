import * as angular from 'angular';

import components from './modules/components/components';
import content from './modules/content/content';

angular.module('@govuk/angularjs-components', [
  components,
  content
]);