import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    fileName: '<'
  },
  template: `<i class="fa {{$ctrl.fileTypeClass}}"></i>`
})
export class MediaIconComponent {

  fileName: string;
  fileTypeClass: string;

  $onChanges(changes: any) {
    if (changes.fileName) {

      const parts = this.fileName.split('.');
      const extname = parts[parts.length - 1];

      switch (extname) {

        case 'doc':
        case 'docx':
          this.fileTypeClass = 'fa-file-word-o';
          break;

        case 'jpg':
        case 'jpeg':
        case 'png':
          this.fileTypeClass = 'fa-file-image-o';
          break;

        case 'pdf':
          this.fileTypeClass = 'fa-file-pdf-o';
          break;

        case 'ppt':
        case 'pptx':
          this.fileTypeClass = 'fa-file-powerpoint-o';
          break;

        case 'rtf':
        case 'txt':
          this.fileTypeClass = 'fa-file-text-o';
          break;

        case 'xls':
        case 'xlsx':
          this.fileTypeClass = 'fa-file-excel-o';
          break;

        default:
          this.fileTypeClass = 'fa-file-o';
      }
    }
  }
}
