export interface ComponentOptions extends ng.IComponentOptions {
  $$tlb?: boolean;
}

export const Component = (options?: ComponentOptions): Function => {
  return (controller: Function) => {
    return angular.extend(options || {}, {controller});
  };
};

export const Directive = (options?: ng.IDirective): Function => {
  return (controller: Function): Function => {
    return (): ng.IDirectiveFactory => {
      return angular.extend(options || {}, {
        controller,
        bindToController: true
      });
    };
  };
};

export const Filter = (): Function => {
  return (Fn: Function) => {
    return ['$injector', ($injector) => {
      const instance = $injector.instantiate(Fn);
      return instance.transform.bind(instance);
    }];
  };
};
