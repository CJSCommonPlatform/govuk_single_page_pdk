
export const routes: angular.ui.IState[] = [
  {
    state:    'home',
    url:      '/',
    template: '<gov-docs-home-page></gov-docs-home-page>',
    ncyBreadcrumb: {
      label: 'Single Page Platform Development Kit'
    }
  },
  {
    state:    'components',
    url:      '/components',
    template: '<gov-docs-components-page></gov-docs-components-page>',
    ncyBreadcrumb: {
      label: 'Components'
    }
  },
  {
    state:    'content',
    url:      '/content',
    template: '<gov-docs-content-page></gov-docs-content-page>',
    ncyBreadcrumb: {
      label: 'Content'
    }
  },
  {
    state:    'examples',
    url:      '/examples',
    template: '<gov-docs-examples-page></gov-docs-examples-page>',
    ncyBreadcrumb: {
      label: 'Examples'
    }
  },
  {
    state:    'layout',
    url:      '/layout',
    template: '<gov-docs-layout-page></gov-docs-layout-page>',
    ncyBreadcrumb: {
      label: 'Layout'
    }
  }
];