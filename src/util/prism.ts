require('../../node_modules/prismjs/themes/prism.css');

const module = angular.module('govuk-single-page-pdk.prism', [])

  .factory('prism', ['$window', ($window) => {
    return $window.Prism;
  }]);

export const prism: string = module.name;