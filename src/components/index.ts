import {pageComponentComponents} from './page-cmp-components';
import {HeaderCmp} from './header/header';

const module = angular.module('govuk_single_page.components', [])

    .component('pageComponentComponents', pageComponentComponents)
    .component('HeaderCmp',HeaderCmp);


export const components: string = module.name;