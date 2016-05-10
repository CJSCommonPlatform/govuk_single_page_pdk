import { config } from './config';
import { componentsDocs } from '../components/docs';
import { contentDocs } from '../content/docs';
import { examplesDocs } from '../examples/docs';
import { layoutDocs } from '../layout/docs';
import {DocsIndexComponent} from './index/index.component';

angular.module('govuk-single-page-sdk.docs', [
  config,
  componentsDocs,
  contentDocs,
  examplesDocs,
  layoutDocs
])
  .component('docsIndexPage', DocsIndexComponent);