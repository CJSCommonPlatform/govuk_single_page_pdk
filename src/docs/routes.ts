
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
    template: '<ui-view><gov-docs-components-page></gov-docs-components-page></ui-view>',
    ncyBreadcrumb: {
      label: 'Components'
    }
  },
  {
    state:    'components.banners',
    url:      '/banners',
    template: '<gov-docs-components-banners-page></gov-docs-components-banners-page>',
    ncyBreadcrumb: {
      label: 'Banners'
    }
  },
  {
    state:    'components.data-visualisation',
    url:      '/data-visualisation',
    template: '<gov-docs-components-data-visualisation-page></gov-docs-components-data-visualisation-page>',
    ncyBreadcrumb: {
      label: 'Data-Visualisation'
    }
  },
  {
    state:    'components.headers',
    url:      '/headers',
    template: '<gov-docs-components-headers-page></gov-docs-components-headers-page>',
    ncyBreadcrumb: {
      label: 'Headers'
    }
  },
  {
    state:    'components.media',
    url:      '/media',
    template: '<gov-docs-components-media-page></gov-docs-components-media-page>',
    ncyBreadcrumb: {
      label: 'Media'
    }
  },
  {
    state:    'components.navigation',
    url:      '/navigation',
    template: '<gov-docs-components-navigation-page></gov-docs-components-navigation-page>',
    ncyBreadcrumb: {
      label: 'Components'
    }
  },
  {
    state:    'components.timeline',
    url:      '/timeline',
    template: '<gov-docs-components-timeline-page></gov-docs-components-timeline-page>',
    ncyBreadcrumb: {
      label: 'Timeline'
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
  },
  {
    state:    'colours',
    url:      '/colours',
    template: '<gov-docs-colours-page></gov-docs-colours-page>',
    ncyBreadcrumb: {
      label: 'Colours'
    }
  }
];