import docsUtils from '../../../util/docs';
import headersFooters from './headers-footers';

import { FooterDemo } from './footer/footer.demo';
import { GovUkHeaderDemo } from './header/header.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.headers-footers', [
  headersFooters,
  docsUtils
])
  .component('govHeaderDemo', GovUkHeaderDemo)
  .component('govFooterDemo', FooterDemo);

export default module.name;
