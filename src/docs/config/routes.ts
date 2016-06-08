import { routes } from '../routes';

const module = angular.module('govuk-single-page-pdk.config.routes', ['ui.router'])

  .config(($stateProvider: angular.ui.IStateProvider,
           $urlRouterProvider: angular.ui.IUrlRouterProvider,
           $locationProvider: ng.ILocationProvider
  ) => {
    routes.forEach(config => $stateProvider.state(config.state, config));
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(false);
  });

export const routeConfig: string = module.name;