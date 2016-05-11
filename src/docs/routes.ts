
export const routes: angular.ui.IState[] = [
  {
    state:    'home',
    url:      '/',
    template: '<gov-docs-index-page></gov-docs-index-page>'
  },
  {
    state:    'components',
    url:      '/components',
    template: '<gov-docs-components-page></gov-docs-components-page>'
  },
  {
    state:    'content',
    url:      '/content',
    template: '<gov-docs-content-page></gov-docs-content-page>'
  },
  {
    state:    'examples',
    url:      '/examples',
    template: '<gov-docs-examples-page></gov-docs-examples-page>'
  },
  {
    state:    'layout',
    url:      '/layout',
    template: '<gov-docs-layout-page></gov-docs-layout-page>'
  }
];