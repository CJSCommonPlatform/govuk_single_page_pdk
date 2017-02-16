import { DetailsComponent, SummaryComponent, browserHasDetails } from './details';

const module = angular.module('govuk-single-page-pdk.components.polyfills', []);

if (!browserHasDetails) {
  module.component('details', DetailsComponent);
  module.component('summary', SummaryComponent);
}

export default module.name;