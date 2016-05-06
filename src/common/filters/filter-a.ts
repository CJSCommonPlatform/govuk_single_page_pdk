import {IModel} from '../interfaces';

/* @ngInject */
export function filterA() {

  return (model: IModel): string => {
    return model.propOne + ' (filtered by filter-a)';
  };
}