import { content } from './content';
import { docsUtils } from '../../util/docs';

const module = angular.module('govuk-single-page-pdk.content-demos', [
  content,
  docsUtils
]);

export const contentDemos = module.name;