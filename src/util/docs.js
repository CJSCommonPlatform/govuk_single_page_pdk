"use strict";
require('prismjs');
require('prismjs/components/prism-scss.min');
require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');
require('../../node_modules/prismjs/themes/prism.css');
require('./docs.scss');
var discuss_component_1 = require('./discuss.component');
var module = angular.module('govDocs-utils', [])
    .component('discussComponent', discuss_component_1.DiscussComponent)
    .factory('prism', ['$window', function ($window) { return $window.Prism; }])
    .directive('prismify', ['prism', function (prism) {
        return {
            restrict: 'EA',
            compile: function (elem, attrs) {
                var language = attrs.language;
                var html = elem.html();
                var indent = Array(html.search(/\S|$/)).join(' ');
                if (indent.length > 1) {
                    var parts = html.split('\n');
                    html = parts
                        .map(function (part) { return part.replace(indent, ''); })
                        .join('\n');
                }
                if (language === 'html')
                    language = 'markup';
                // hack added to solve the problem with '&' being converted into '&amp;' when scss
                if (language === 'scss')
                    html = html.replace(/&amp;/g, '&');
                html = prism.highlight(html, prism.languages[language]).trim();
                elem.html("<pre class=\"language-" + language + "\"><code>" + html + "</code></pre>");
            }
        };
    }])
    .directive('docsExample', function () {
    return {
        compile: function (tElem, tAttrs) {
            var html = tElem.html();
            var lang = tAttrs.language;
            var tpl = '';
            if (['markup', 'html'].indexOf(lang) > -1) {
                tpl += "<div class=\"example\">" + html + "</div>";
            }
            tpl += "<prismify language=\"" + lang + "\">" + html + "</prismify>";
            tElem.html(tpl);
        }
    };
});
exports.__esModule = true;
exports["default"] = module.name;
//# sourceMappingURL=docs.js.map