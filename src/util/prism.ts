require('../../node_modules/prismjs/themes/prism.css');

const module = angular.module('govuk-single-page-pdk.prism', [])

  .factory('prism', ['$window', ($window) => $window.Prism]);

export const prism: string = module.name;

export const highlightHTML = (html: string): string => {
  const escapedHtml = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
  return `<pre><code class="language-markup">${escapedHtml}</code></pre>`;
};