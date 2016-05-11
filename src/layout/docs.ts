import { prism } from '../util/prism';
import { LayoutIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-pdk.layout-docs', [prism])

  .component('govDocsLayoutPage', LayoutIndexComponent);

export const layoutDocs = module.name;