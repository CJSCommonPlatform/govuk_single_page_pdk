import breadcrumbConfig from './breadcrumbs';
import compileConfig from './compile';
import routeConfig from './routes';

const module = angular.module('govuk-single-page-pdk.config', [
  breadcrumbConfig,
  routeConfig,
  compileConfig
]);

export default module.name;