import docsUtils from '../../../util/docs';
import formsErrors from './forms-errors';

import { DateInputDemo } from './date-input/date-input.demo';
import { ErrorMessageDemo } from './error-message/error-message.demo';
import { ErrorSummaryDemo } from './error-summary/error-summary.demo';
import { SearchDemo } from './search/search.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.forms-errors', [
  formsErrors,
  docsUtils
])
  .component('govDateInputDemo', DateInputDemo)
  .component('govErrorMessageDemo', ErrorMessageDemo)
  .component('govErrorSummaryDemo', ErrorSummaryDemo)
  .component('govSearchDemo', SearchDemo);

export default module.name;