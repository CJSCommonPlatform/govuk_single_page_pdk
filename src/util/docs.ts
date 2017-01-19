import 'prismjs';
import 'prismjs/components/prism-scss.min';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

require('../../node_modules/prismjs/themes/prism.css');
require('./docs.scss');

import { DiscussComponent } from './discuss.component';
import { NgBadgeComponent } from './ng-badge.component';

// Don't want to render code examples when testing with pa11y
// because there are a lot of colour contrast errors that need
// to be avoided.
const RENDER_CODE_EXAMPLES = !process.env.IS_PA11Y;

const module = angular.module('govDocs-utils', [])
  .component('discussComponent', DiscussComponent)
  .component('ngBadge', NgBadgeComponent)

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
            .join('\n')
            .replace(`=""`, '');
        }
        if (language === 'html') language = 'markup';

        // hack added to solve the problem with '&' being converted into '&amp;' when scss
        if (language === 'scss') html = html.replace(/&amp;/g, '&');

        html = prism.highlight(html, prism.languages[language]).trim();
        if (RENDER_CODE_EXAMPLES) {
          elem.html(`<pre class="code-example language-${language}"><code>${html}</code></pre>`);
        }
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

export default module.name;