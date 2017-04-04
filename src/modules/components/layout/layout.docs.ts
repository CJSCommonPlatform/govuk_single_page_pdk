import docsUtils from '../../../util/docs';
import layout from './layout';

import { DividerDocs } from './divider/divider.docs';
import { MastheadDocs } from './masthead/masthead.docs';

const module = angular.module('govuk-single-page-pdk.component-demos.layout', [
  layout,
  docsUtils
])
  .component('dividerDocs', DividerDocs)
  .component('mastheadDocs', MastheadDocs);

export default module.name;