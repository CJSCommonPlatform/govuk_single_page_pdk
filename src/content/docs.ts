import { prism } from '../util/prism';
import { ContentIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-pdk.content-docs', [prism])

  .component('contentIndexPage', ContentIndexComponent);

export const contentDocs = module.name;