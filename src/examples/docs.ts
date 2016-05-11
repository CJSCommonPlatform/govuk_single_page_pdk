import { ExamplesIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-pdk.demos-docs', [])

  .component('examplesIndexPage', ExamplesIndexComponent);

export const examplesDocs = module.name;