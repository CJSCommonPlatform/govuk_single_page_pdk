import { layout } from './layout';
import { docsUtils } from '../util/docs';

import { LayoutIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-pdk.layout-docs', [
  docsUtils,
  layout
])
  .component('govDocsLayoutPage', LayoutIndexComponent);

export const layoutDocs = module.name;