import { routeConfig } from './routes';
import { compileConfig } from './compile';

const module = angular.module('govuk-single-page-pdk.config', [
  routeConfig,
  compileConfig
]);

export const config: string = module.name;