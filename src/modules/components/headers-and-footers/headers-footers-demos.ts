import docsUtils from '../../../util/docs';
import headersFooters from './headers-footers';

import { CookieMessageDocs } from './cookie-message/cookie-message.docs';
import { FooterDocs } from './footer-new/footer.docs';
import { HeaderDocs } from './header-new/header.docs';
import { SkipLinkDocs } from './skip-link/skip-link.docs';

import { FooterDemo } from './footer/footer.demo';
import { GovUkHeaderDemo } from './header/header.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.headers-footers', [
  headersFooters,
  docsUtils
])
  .component('cookieMessageDocs', CookieMessageDocs)
  .component('footerDocs', FooterDocs)
  .component('headerDocs', HeaderDocs)
  .component('skipLinkDocs', SkipLinkDocs)

  .component('govHeaderDemo', GovUkHeaderDemo)
  .component('govFooterDemo', FooterDemo);

export default module.name;
