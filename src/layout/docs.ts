import { LayoutIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-pdk.layout-docs', [])

  .component('layoutIndexPage', LayoutIndexComponent);

export const layoutDocs = module.name;