import {pageComponentComponents} from './page-cmp-components';
import {Header} from './header/header';

const module = angular.module('govuk_single_page.components', [])

    .component('pageComponentComponents', pageComponentComponents);


export const components: string = module.name;