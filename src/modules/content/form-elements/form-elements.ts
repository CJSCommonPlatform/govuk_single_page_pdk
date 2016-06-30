import { CheckboxDemo } from './checkbox/checkbox.demo';
import { FocusDirective } from './focus/focus.directive';
import { RadioDemo } from './radio/radio.demo';
import { SearchDemo } from './search/search.demo';

const module = angular.module('govuk-single-page-pdk.content.form-elements', [])

  .directive('blockLabel', FocusDirective)
  .component('govCheckboxDemo', CheckboxDemo)
  .component('govRadioDemo', RadioDemo)
  .component('govSearchDemo', SearchDemo);

export default module.name;