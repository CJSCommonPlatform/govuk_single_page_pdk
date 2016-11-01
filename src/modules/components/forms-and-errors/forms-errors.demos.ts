import docsUtils from '../../../util/docs';
import formsErrors from './forms-errors';

import { DirectivesDocs } from './directives/directives.docs';

import { DateInputDocs } from './date-input/date-input.docs';
import { ErrorMessageDemo } from './error-message/error-message.demo';
import { ErrorSummaryDemo } from './error-summary/error-summary.demo';
import { SearchDemo } from './search/search.demo';
import { ActionBarDemo } from './action-bar/action-bar.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.forms-errors', [
  formsErrors,
  docsUtils
])
  .component('dateInputDocs', DateInputDocs)

  .component('formDirectivesDocs', DirectivesDocs)
  .component('govErrorMessageDemo', ErrorMessageDemo)
  .component('govErrorSummaryDemo', ErrorSummaryDemo)
  .component('govSearchDemo', SearchDemo)
  .component('govActionBarDemo', ActionBarDemo);

export default module.name;