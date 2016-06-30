import docsUtils from '../../../util/docs';
import media from './media';

import { ImageDemoComponent } from './image/image.demo';
import { StatementDemo } from './statement/statement.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.media', [
  media,
  docsUtils
])
  .component('govImageDemo', ImageDemoComponent)
  .component('govStatementDemo', StatementDemo);

export default module.name;