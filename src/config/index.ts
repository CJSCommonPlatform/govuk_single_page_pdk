import {routes} from './routes';

const module = angular.module('govuk_single_page.config', ['ui.router'])

  .config(($stateProvider, $urlRouterProvider) => {
    routes.forEach(config => $stateProvider.state(config.state, config));
    $urlRouterProvider.otherwise('/single_page_service_development_kit');
  });

export const config: string = module.name;