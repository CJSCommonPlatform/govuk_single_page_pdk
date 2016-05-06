
/* @ngInject */
export function filterTwoOne(): Function {

  return (val: string): string => {
    return val + ' (filtered by filter-2.1)';
  };
}