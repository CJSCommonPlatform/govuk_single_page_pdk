import * as angular from 'angular';

import { components } from './modules/components/components';
import { content } from './modules/content/content';
import { examples } from './modules/examples/examples';
import { layout } from './modules/layout/layout';

angular.module('@govuk/angularjs-components', [
  components,
  content,
  examples,
  layout
]);