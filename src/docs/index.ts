require('index.scss');

import { config } from './config';
import { components } from '../components/components';
import { content } from '../content/content';
import { examples } from '../examples/examples';
import { layout } from '../layout/layout';
import { componentsDocs } from '../components/docs';
import { contentDocs } from '../content/docs';
import { examplesDocs } from '../examples/docs';
import { layoutDocs } from '../layout/docs';
import { DocsIndexComponent } from './index/index.component';
import { DocsLayoutComponent } from './layout/layout.component';

angular.module('govuk-single-page-pdk.docs', [
  config,
  components,
  componentsDocs,
  content,
  contentDocs,
  examples,
  examplesDocs,
  layout,
  layoutDocs
])
  .component('govDocsIndexPage', DocsIndexComponent)
  .component('govDocs', DocsLayoutComponent);