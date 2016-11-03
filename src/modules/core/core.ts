import { LanguageService } from './language';

const module = angular.module('govuk-single-page-pdk.core', [])

  .service('language', LanguageService);

export default module.name;