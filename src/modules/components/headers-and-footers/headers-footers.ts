import coreModule from '../../core/core';

import { DeprecatedFooterComponent } from './footer/footer.component';
import { GovUkHeaderComponent } from './header/header.component';

import { CookieMessageComponent } from './cookie-message/cookie-message.component';
import { HeaderComponent, HeaderNameComponent } from './header-new/header.component';
import { HeaderNavComponent, HeaderNavItemComponent } from './header-new/header-nav.component';
import { FooterComponent } from './footer-new/footer.component';
import { FooterNavComponent, FooterNavItemComponent } from './footer-new/footer-nav.component';
import { SkipLinkComponent } from './skip-link/skip-link.component';

const module = angular.module('govuk-single-page-pdk.components.headers-footers', [
  coreModule
])

  .component('pdkFooter', FooterComponent)
  .component('footerNav', FooterNavComponent)
  .component('footerNavItem', FooterNavItemComponent)

  .component('pdkHeader', HeaderComponent)
  .component('headerNav', HeaderNavComponent)
  .component('headerName', HeaderNameComponent)
  .component('headerNavItem', HeaderNavItemComponent)

  .component('pdkCookieMessage', CookieMessageComponent)
  .component('pdkSkipLink', SkipLinkComponent)

  .component('govFooter', DeprecatedFooterComponent)
  .component('govHeader', GovUkHeaderComponent);

export default module.name;
