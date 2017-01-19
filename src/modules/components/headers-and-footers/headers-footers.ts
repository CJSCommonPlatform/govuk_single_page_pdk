import { FooterComponent } from './footer/footer.component';
import { GovUkHeaderComponent } from './header/header.component';

const module = angular.module('govuk-single-page-pdk.components.headers-footers', [])

  .component('govFooter', FooterComponent)
  .component('govHeader', GovUkHeaderComponent);

export default module.name;
