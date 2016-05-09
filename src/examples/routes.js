"use strict";
exports.exmaplesRoutes = [
    {
        state: 'examples',
        url: '/examples',
        abstract: true,
        template: '<layout-component-three></layout-component-three>',
        resolve: {
            module: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var d = $q.defer();
                    require.ensure([], function (require) {
                        $ocLazyLoad.load({ name: require('./index').domainThree });
                        d.resolve();
                    });
                    return d.promise;
                }]
        }
    },
    {
        state: 'domain3.one',
        url: '/one',
        template: '<page-component-three-one></page-component-three-one>'
    },
    {
        state: 'domain3.two',
        url: '/two',
        template: '<page-component-three-two></page-component-three-two>'
    }
];
//# sourceMappingURL=routes.js.map