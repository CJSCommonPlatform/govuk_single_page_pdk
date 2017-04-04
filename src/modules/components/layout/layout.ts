import { DividerComponent } from './divider/divider.component';
import { MastheadComponent } from './masthead/masthead.component';

const module = angular.module('govuk-single-page-pdk.components.layout', [])

  .component('pdkMasthead', MastheadComponent)
  .component('pdkDivider', DividerComponent);

export default module.name;