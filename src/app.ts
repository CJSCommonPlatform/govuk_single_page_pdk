import {common} from './common';
import {config} from './config';
import {sdk} from './sdk';
import {components} from './components';

require('./app.scss');

const appModule = angular.module('govuk_single_page', [
  common,
  config,
  sdk,
  components,
  'oc.lazyLoad',
  'ui.router'
]);

export const app = appModule.name;