import { content } from './content';
import { docsUtils } from '../../util/docs';
import { RadioDemo } from './form-elements/radio/radio.demo';
import { CheckboxDemo } from './form-elements/checkbox/checkbox.demo';
import { SearchDemo } from './form-elements/search/search.demo';

const module = angular.module('govuk-single-page-pdk.content-demos', [
  content,
  docsUtils
])
  .component('govRadioDemo', RadioDemo)
  .component('govCheckboxDemo', CheckboxDemo)
  .component('govSearchDemo', SearchDemo);

export const contentDemos = module.name;