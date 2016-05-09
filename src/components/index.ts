import {PageComponentComponents} from './page-cmp-components';
import {HeaderCmp} from './header/header';

const module = angular.module('govuk_single_page.components', [])

    .component('pageComponentComponents', PageComponentComponents)
    .component('headerCmp', HeaderCmp);


export const components: string = module.name;