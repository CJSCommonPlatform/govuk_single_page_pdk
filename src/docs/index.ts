require('index.scss');

import { config } from './config';
import { componentsDemos } from '../modules/components/demos';
import { contentDemos } from '../modules/content/demos';
import { layoutDemos } from '../modules/layout/demos';
import { AppLayout } from './app/app-layout.component';
import { ComponentsPage } from './app/components/index.component';
import { BannersPage } from './app/components/banners.component';
import { DataVisualisationPage } from './app/components/data-visualisation.component';
import { HeadersPage } from './app/components/headers.component';
import { MediaPage } from './app/components/media.component';
import { NavigationPage } from './app/components/navigation.component';
import { TimelinePage } from './app/components/timeline.component';
import { ContentPage } from './app/content/content.component';
import { ExamplesPage } from './app/examples/examples.component';
import { ColoursPage } from './app/content/colours/colours.component';
import { HomePage } from './app/home/home.component';
import { LayoutPage } from './app/layout/layout.component';
import { FormElementsPage } from './app/content/form-elements/form-elements.component';

angular.module('govuk-single-page-pdk.docs', [
  config,
  componentsDemos,
  contentDemos,
  layoutDemos,
  'ncy-angular-breadcrumb',
  'ui.router',
  'ngSanitize'
])
  .component('govDocs', AppLayout)
  .component('govDocsHomePage', HomePage)
  .component('govDocsComponentsPage', ComponentsPage)
  .component('govDocsComponentsBannersPage', BannersPage)
  .component('govDocsComponentsDataVisualisationPage', DataVisualisationPage)
  .component('govDocsComponentsHeaderPage', HeadersPage)
  .component('govDocsComponentsMediaPage', MediaPage)
  .component('govDocsComponentsNavigationPage', NavigationPage)
  .component('govDocsComponentsTimelinePage', TimelinePage)
  .component('govDocsContentPage', ContentPage)
  .component('govDocsExamplesPage', ExamplesPage)
  .component('govDocsLayoutPage', LayoutPage)
  .component('govDocsColoursPage', ColoursPage)
  .component('govDocsFormElementsPage', FormElementsPage);
