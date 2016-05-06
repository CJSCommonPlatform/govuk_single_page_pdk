import {componentsRoutes} from '../components/routes';
import {contentRoutes} from '../content/routes';
import {exmaplesRoutes} from '../examples/routes';

export const routes: angular.ui.IState[] = [
  ...componentsRoutes,
  ...contentRoutes,
  ...exmaplesRoutes
];