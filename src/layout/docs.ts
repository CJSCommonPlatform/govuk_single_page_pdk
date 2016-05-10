import { LayoutIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-sdk.layout-docs', [])

  .component('layoutIndexPage', LayoutIndexComponent);

export const layoutDocs = module.name;