import { layout } from './layout';
import { docsUtils } from '../../util/docs';

const module = angular.module('govuk-single-page-pdk.layout-demos', [
  docsUtils,
  layout
]);

export const layoutDemos = module.name;