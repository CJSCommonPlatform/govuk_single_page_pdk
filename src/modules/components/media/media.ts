import { DownloadDocumentComponent } from './download-document/download-document.component';
import { ImageComponent } from './image/image.component';
import { MediaIconComponent } from './media-icon/media-icon.component';
import { StatementComponent } from './statement/statement.component';
import { VideoComponent} from './video/video.component';
import { toBytes } from './filters/toBytes.filter';
import { noFileType } from './filters/noFileType.filter';
import { toFileType } from './filters/toFileType.filter';

const module = angular.module('govuk-single-page-pdk.components.media', [])

  .filter('toBytes', toBytes)
  .filter('noFileType', noFileType)
  .filter('toFileType', toFileType)

  .component('govDownloadDocument', DownloadDocumentComponent)
  .component('govMediaIcon', MediaIconComponent)
  .component('govImage', ImageComponent)
  .component('govStatement', StatementComponent)
  .component('govVideo', VideoComponent);

export default module.name;