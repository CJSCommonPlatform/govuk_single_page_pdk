import {common} from './common';
import {config} from './config';
import {components} from './components';
import {content} from './content';

require('./index.scss');

const appModule = angular.module('ngGovExample', [
  common,
  config,
  components,
  content,
  'oc.lazyLoad',
  'ui.router'
]);

export const app = appModule.name;