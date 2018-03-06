import { Component } from '@cppui/angularjs-devtools';
import { noFileType } from '../filters/noFileType.filter';

@Component({
  bindings: {
    // Optional attribute. The url of an image.
    // If provided, a thumbnail of the image will be shown instead of an icon.
    imageSrc:    '<?',
    // String for the date or datetime.
    // Use of the '@' binding means that the attribute can either
    // render out a string e.g. datetime="{{ myDateString }}"
    // or can format a JavaScript date to be a date or datetime
    // datetime="{{ myJavaScriptDate | date:'dd MMMM yyyy' }}"
    // datetime="{{ myJavaScriptDate | date:'dd MMMM yyyy hh:mm a }}"
    datetime:         '@',
    // Number. The number of pages the document contains.
    numPages:        '<',
    // Number. The filesize in bytes
    fileSize:        '<',
    // String. The file name including filetype suffix e.g. 'important_doc.pdf'
    // Unless overridden by the title attribute, the filename less the 
    // filetype suffix will be used as the title e.g. in this case 'important_doc'
    fileName:        '<',
    // Optional attribute. String.
    // Text to display for the title link. Will override the filename.
    title:           '<?',
    // The onclick handler (presumably to download the document)
    onSelect:        '&',
    // Optional attribute. Boolean
    // Whether to use the small icon. Defaults to false.
    smallIcon:       '<?'
  },
  template: require('./download-document.component.html')
})
export class DownloadDocumentComponent {

  static $inject = ['$filter'];

  title: string;
  fileName: string;

  constructor(private $filter: any) {}

  $onInit(): void {

    // Providing title is option.
    // If not provided, default to file name
    if (!this.title) {
      // Chops off the file type suffix from the provided filename
      this.title = this.$filter('noFileType')(this.fileName);
    }

  }
}
