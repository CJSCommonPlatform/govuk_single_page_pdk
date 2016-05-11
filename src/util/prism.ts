require('../../node_modules/prismjs/themes/prism.css');
require('./prism.scss');

const module = angular.module('govuk-single-page-pdk.prism', [])

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
  });

export const prism: string = module.name;