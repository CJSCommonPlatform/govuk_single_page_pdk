require('index.scss');

import { config } from './config';
import { componentsDocs } from '../components/docs';
import { contentDocs } from '../content/docs';
import { examplesDocs } from '../examples/docs';
import { layoutDocs } from '../layout/docs';
import { DocsIndexComponent } from './index/index.component';
import { DocsLayoutComponent } from './layout/layout.component';

angular.module('govuk-single-page-pdk.docs', [
  config,
  componentsDocs,
  contentDocs,
  examplesDocs,
  layoutDocs
])
  .component('govDocsIndexPage', DocsIndexComponent)
  .component('govDocs', DocsLayoutComponent);