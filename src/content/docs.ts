import { content } from './content';
import { docsUtils } from '../util/docs';

import { ContentIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-pdk.content-docs', [
  content,
  docsUtils
])
  .component('govDocsContentPage', ContentIndexComponent);

export const contentDocs = module.name;