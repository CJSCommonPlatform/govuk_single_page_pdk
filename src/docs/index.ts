require('index.scss');

import { config } from './config';
import { componentsDemos } from '../modules/components/demos';
import { contentDemos } from '../modules/content/demos';
import { layoutDemos } from '../modules/layout/demos';
import { AppLayout } from './app/app-layout.component';
import { ComponentsPage } from './app/components/components.component';
import { ContentPage } from './app/content/content.component';
import { ExamplesPage } from './app/examples/examples.component';
import { ColoursPage } from './app/content/colours/colours.component';
import { HomePage } from './app/home/home.component';
import { LayoutPage } from './app/layout/layout.component';

angular.module('govuk-single-page-pdk.docs', [
  config,
  componentsDemos,
  contentDemos,
  layoutDemos,
  'ncy-angular-breadcrumb',
  'ui.router'
])
  .component('govDocs', AppLayout)
  .component('govDocsHomePage', HomePage)
  .component('govDocsComponentsPage', ComponentsPage)
  .component('govDocsContentPage', ContentPage)
  .component('govDocsExamplesPage', ExamplesPage)
  .component('govDocsLayoutPage', LayoutPage)
  .component('govDocsColoursPage', ColoursPage);
