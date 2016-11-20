import { DividerComponent } from './divider/divider.component';

const module = angular.module('govuk-single-page-pdk.components.layout', [])

  .component('pdkDivider', DividerComponent);

export default module.name;