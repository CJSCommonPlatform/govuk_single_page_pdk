import 'prismjs';

require('../../node_modules/prismjs/themes/prism.css');
require('./docs.scss');

import { DiscussComponent } from './discuss.component';

const module = angular.module('govDocs-utils', [])
  .component('discussComponent', DiscussComponent)

  .factory('prism', ['$window', ($window) => $window.Prism])

  .directive('prismify', (prism) => {
    return {
      restrict: 'EA',
      compile: (elem: ng.IAugmentedJQuery, attrs: any) => {
        let language: string = attrs.language;
        if (language === 'html') language = 'markup';

        const html = prism.highlight(elem.html(), prism.languages[language]).trim();
        elem.html(`<pre class="language-${language}"><code>${html}</code></pre>`);
      }
    };
  })

  .directive('docsExample', () => {
    return {
      compile: (tElem: ng.IAugmentedJQuery, tAttrs: any) => {
        const html = tElem.html();
        let tpl = `<div class="example">${html}</div>`;

        if (tAttrs.hasOwnProperty('markup')) {
          tpl += `<prismify language="html">${html}</prismify>`;
        }
        tElem.html(tpl);
      }
    };
  });

export const docsUtils = module.name; 