const isProd = process.env.NODE_ENV === 'production';

const module = angular.module('govuk-single-page-sdk.config.compile', [])

  .config(($compileProvider: ng.ICompileProvider) => {
    $compileProvider.debugInfoEnabled(!isProd);
  });

export const compileConfig: string = module.name;