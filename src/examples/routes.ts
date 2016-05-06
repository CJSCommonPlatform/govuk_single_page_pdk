
export const exmaplesRoutes: angular.ui.IState[] = [
  {
    state:    'examples',
    url:      '/examples',
    abstract: true,
    template: '<layout-component-three></layout-component-three>',
    resolve: {
      module: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
        const d = $q.defer();
        require.ensure([], require => {
          $ocLazyLoad.load({name: require('./index').domainThree});
          d.resolve();
        });
        return d.promise;
      }]
    }
  },
  {
    state:    'domain3.one',
    url:      '/one',
    template: '<page-component-three-one></page-component-three-one>'
  },
  {
    state:    'domain3.two',
    url:      '/two',
    template: '<page-component-three-two></page-component-three-two>'
  }
];