import docsUtils from '../../../util/docs';
import formsErrors from './forms-errors';

import { DirectivesDocs } from './directives/directives.docs';

import { ErrorMessageDocs } from './error-message/error-message.docs';
import { DateInputDocs } from './date-input/date-input.docs';
import { ErrorMessageDemo } from './error-message-deprecated/error-message.demo';
import { ErrorSummaryDemo } from './error-summary/error-summary.demo';
import { SearchDemo } from './search-deprecated/search.demo';
import { ActionBarDemo } from './action-bar/action-bar.demo';
import { CurrencyInputDocs } from './currency-input/currency-input.docs';
import { TimeInputDocs } from './time-input/time-input.docs';
import { DurationInputDocs } from './duration-input/duration-input.docs';
import { SearchDocs } from './search/search.docs';

const module = angular.module('govuk-single-page-pdk.component-demos.forms-errors', [
  formsErrors,
  docsUtils
])
  .component('dateInputDocs', DateInputDocs)
  .component('currencyInputDocs', CurrencyInputDocs)
  .component('errorMessageDocs', ErrorMessageDocs)
  .component('timeInputDocs', TimeInputDocs)
  .component('durationInputDocs', DurationInputDocs)
  .component('searchDocs', SearchDocs)

  .component('formDirectivesDocs', DirectivesDocs)

  .component('govErrorMessageDemo', ErrorMessageDemo)
  .component('govErrorSummaryDemo', ErrorSummaryDemo)
  .component('govSearchDemo', SearchDemo)
  .component('govActionBarDemo', ActionBarDemo);

export default module.name;