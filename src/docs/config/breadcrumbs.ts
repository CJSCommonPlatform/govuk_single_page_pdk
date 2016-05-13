const module = angular.module('govuk-single-page-pdk.config.breadcrumbs', ['ncy-angular-breadcrumb'])

    .config(($breadcrumbProvider: ncy.$breadcrumbProvider) => {
        $breadcrumbProvider.setOptions({
            prefixStateName: 'home',
            template: require('../../components/breadcrumbs/ui-router-breadcrumbs.component.html')
        })
    });

export const breadcrumbConfig: string = module.name;