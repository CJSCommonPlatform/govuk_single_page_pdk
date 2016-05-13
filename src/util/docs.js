"use strict";
require('prismjs');
require('../../node_modules/prismjs/themes/prism.css');
require('./docs.scss');
var module = angular.module('govDocs-utils', [])
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
})
    .directive('docsExample', function () {
    return {
        compile: function (tElem, tAttrs) {
            var html = tElem.html();
            var tpl = "<div class=\"example\">" + html + "</div>";
            if (tAttrs.hasOwnProperty('markup')) {
                tpl += "<prismify language=\"html\">" + html + "</prismify>";
            }
            tElem.html(tpl);
        }
    };
});
exports.docsUtils = module.name;
