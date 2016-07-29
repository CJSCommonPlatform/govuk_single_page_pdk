const isProd = process.env.NODE_ENV === 'production';

const module = angular.module('govuk-single-page-pdk.config.compile', [])

  .config(($compileProvider: ng.ICompileProvider) => {
    $compileProvider.debugInfoEnabled(!isProd);
  });

export default module.name;