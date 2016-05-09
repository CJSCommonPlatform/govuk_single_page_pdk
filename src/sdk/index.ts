import {pageComponentSdk} from './page-cmp-sdk';

const module = angular.module('govuk_single_page.sdk', [])

    .component('pageComponentSdk', pageComponentSdk);

export const sdk: string = module.name;