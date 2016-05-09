/*
import {componentsRoutes} from '../components/routes';
import {contentRoutes} from '../content/routes';
import {exmaplesRoutes} from '../examples/routes';
*/
import {sdkRoutes} from '../sdk/routes';

export const routes: angular.ui.IState[] = [
  ...sdkRoutes
    /*
  ...componentsRoutes,
  ...contentRoutes,
  ...exmaplesRoutes */
];