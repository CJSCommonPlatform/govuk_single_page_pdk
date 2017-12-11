import { DividerComponent } from './divider/divider.component';
import { MastheadComponent } from './masthead/masthead.component';
import { MastheadLinkBox } from './masthead-link-box/masthead-link-box.component';

const module = angular.module('govuk-single-page-pdk.components.layout', [])

  .component('pdkMasthead', MastheadComponent)
  .component('mastheadLinkBox', MastheadLinkBox)

  .component('pdkDivider', DividerComponent);

export default module.name;