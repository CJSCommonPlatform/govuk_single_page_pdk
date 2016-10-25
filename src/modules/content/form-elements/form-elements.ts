import { CheckboxDemo } from './checkbox/checkbox.demo';
import { RadioDemo } from './radio/radio.demo';

const module = angular.module('govuk-single-page-pdk.content.form-elements', [])

  .component('govCheckboxDemo', CheckboxDemo)
  .component('govRadioDemo', RadioDemo);

export default module.name;