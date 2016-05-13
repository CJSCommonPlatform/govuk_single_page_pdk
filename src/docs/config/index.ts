import { routeConfig } from './routes';
import { breadcrumbConfig } from './breadcrumbs';
import { compileConfig } from './compile';

const module = angular.module('govuk-single-page-pdk.config', [
  breadcrumbConfig,
  routeConfig,
  compileConfig
]);

export const config: string = module.name;