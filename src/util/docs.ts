import 'prismjs';
import 'prismjs/components/prism-scss.min';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

require('../../node_modules/prismjs/themes/prism.css');
require('./docs.scss');

import { DiscussComponent } from './discuss.component';

const module = angular.module('govDocs-utils', [])
  .component('discussComponent', DiscussComponent)

  .factory('prism', ['$window', ($window) => $window.Prism])

  .directive('prismify', ['prism', (prism) => {
    return {
      restrict: 'EA',
      compile: (elem: ng.IAugmentedJQuery, attrs: any) => {
        let language: string = attrs.language;
        let html   = elem.html();
        let indent = Array(html.search(/\S|$/)).join(' ');

        if (indent.length > 1) {
          let parts = html.split('\n');
          html = parts
            .map((part: string) => part.replace(indent, ''))
            .join('\n');
        }
        if (language === 'html') language = 'markup';

        // hack added to solve the problem with '&' being converted into '&amp;' when scss
        if (language === 'scss') html = html.replace(/&amp;/g, '&');

        html = prism.highlight(html, prism.languages[language]).trim();
        elem.html(`<pre class="language-${language}"><code>${html}</code></pre>`);
      }
    };
  }])

  .directive('docsExample', () => {
    return {
      compile: (tElem: ng.IAugmentedJQuery, tAttrs: any) => {
        const html = tElem.html();
        const lang = tAttrs.language;
        let tpl = '';

        if (['markup', 'html'].indexOf(lang) > -1) {
          tpl += `<div class="example">${html}</div>`;
        }
        tpl += `<prismify language="${lang}">${html}</prismify>`;
        tElem.html(tpl);
      }
    };
  });

export const docsUtils = module.name;