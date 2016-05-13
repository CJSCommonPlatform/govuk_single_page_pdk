"use strict";
require('../../node_modules/prismjs/themes/prism.css');
require('./prism.scss');
var module = angular.module('govuk-single-page-pdk.prism', [])
    .factory('prism', ['$window', function ($window) { return $window.Prism; }])
    .directive('prismify', function (prism) {
    return {
        restrict: 'EA',
        compile: function (elem, attrs) {
            var language = attrs.language;
            if (language === 'html')
                language = 'markup';
            var html = prism.highlight(elem.html(), prism.languages[language]).trim();
            elem.html("<pre class=\"language-" + language + "\"><code>" + html + "</code></pre>");
        }
    };
});
exports.prism = module.name;
