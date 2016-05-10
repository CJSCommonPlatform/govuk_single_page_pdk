import { ExamplesIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-sdk.demos-docs', [])

  .component('examplesIndexPage', ExamplesIndexComponent);

export const examplesDocs = module.name;