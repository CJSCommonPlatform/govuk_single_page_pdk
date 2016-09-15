import docsUtils from '../../../util/docs';
import media from './media';

import { DownloadDocumentDemo } from './download-document/download-document.demo';
import { ImageDemoComponent } from './image/image.demo';
import { StatementDemo } from './statement/statement.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.media', [
  media,
  docsUtils
])
  .component('govDownloadDocumentDemo', DownloadDocumentDemo)
  .component('govImageDemo', ImageDemoComponent)
  .component('govStatementDemo', StatementDemo);

export default module.name;