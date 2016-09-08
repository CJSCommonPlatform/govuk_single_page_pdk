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
    template: '<gov-docs-components-header-page></gov-docs-components-header-page>',
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
      label: 'Navigation'
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
    state:    'components.forms-and-errors',
    url:      '/forms-and-errors',
    template: '<gov-docs-components-forms-and-errors-page></gov-docs-components-forms-and-errors-page>',
    ncyBreadcrumb: {
      label: 'Forms and errors'
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
    template: '<ui-view><gov-docs-layout-page></gov-docs-layout-page></ui-view>',
    ncyBreadcrumb: {
      label: 'Layout'
    }
  },
  {
    state:    'layout.citizen',
    url:      '/citizen',
    template: '<gov-docs-citizen-layout-page></gov-docs-citizen-layout-page>',
    ncyBreadcrumb: {
      label: 'Citizen Layout'
    }
  },
  {
    state:    'layout.business',
    url:      '/business',
    template: '<gov-docs-business-layout-page></gov-docs-business-layout-page>',
    ncyBreadcrumb: {
      label: 'Business Layout'
    }
  },
  {
    state:    'content',
    url:      '/content',
    template: '<ui-view><gov-docs-content-page></gov-docs-content-page></ui-view>',
    ncyBreadcrumb: {
      label: 'Content'
    }
  },
  {
    state:    'content.colours',
    url:      '/colours',
    template: '<gov-docs-content-colours-page></gov-docs-content-colours-page>',
    ncyBreadcrumb: {
      label: 'Colours'
    }
  },
  {
    state:    'content.typography',
    url:      '/typography',
    template: '<gov-docs-content-typography-page></gov-docs-content-typography-page>',
    ncyBreadcrumb: {
      label: 'Typography'
    }
  },
  {
    state:    'content.buttons',
    url:      '/buttons',
    template: '<gov-docs-content-buttons-page></gov-docs-content-buttons-page>',
    ncyBreadcrumb: {
      label: 'Buttons'
    }
  },
  {
    state:     'content.form-elements',
    url:       '/form-elements',
    template: '<gov-docs-form-elements-page></gov-docs-form-elements-page>',
    ncyBreadcrumb: {
      label: 'Form Elements'
    }
  },
  {
    state:     'content.icons-media',
    url:       '/icons-media',
    template: '<gov-docs-content-icons-media-page></gov-docs-content-icons-media-page>',
    ncyBreadcrumb: {
      label: 'Icons and Media'
    }
  },
  {
    state:     'content.errors',
    url:       '/errors',
    template: '<gov-docs-content-errors-page></gov-docs-content-errors-page>',
    ncyBreadcrumb: {
      label: 'Errors'
    }
  },
  {
    state:     'content.utils',
    url:       '/utils',
    template: '<gov-docs-content-utils-page></gov-docs-content-utils-page>',
    ncyBreadcrumb: {
      label: 'Utility Classes'
    }
  },
  {
    state:     'content.data',
    url:       '/data',
    template: '<gov-docs-content-data-page></gov-docs-content-data-page>',
    ncyBreadcrumb: {
      label: 'Data'
    }
  }
];