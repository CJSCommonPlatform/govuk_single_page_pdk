import { examples } from './examples';
import { docsUtils } from '../util/docs';

import { ExamplesIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-pdk.demos-docs', [
  docsUtils,
  examples
])
  .component('govDocsExamplesPage', ExamplesIndexComponent);

export const examplesDocs = module.name;