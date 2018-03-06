import { Component } from '@cppui/angularjs-devtools';

@Component({
  template: require('./download-document.demo.html')
})
export class DownloadDocumentDemo {

  thumbnailExample = {
    imageSrc: 'assets/images/document-thumbnail.jpg',
    datetime: new Date(2016, 4, 16),
    fileName: 'Statement 1 from Linda THOMAS.pdf',
    fileSize: 756391,
    numPages: 18,
    onSelect: function() {
      console.log('Clicked to download \"Statement 1 from Linda THOMAS.pdf\"');
    }
  };

  iconExample = {
    datetime: new Date(2016, 4, 16),
    fileName: 'Statement 1 from Linda THOMAS.pdf',
    fileSize: 756391,
    numPages: 18,
    onSelect: function() {
      console.log('Clicked to download \"Statement 1 from Linda THOMAS.pdf\"');
    }
  };

  smallIconExample = {
    datetime: new Date(2016, 4, 16),
    fileName: 'Statement 1 from Linda THOMAS.pdf',
    fileSize: 756391,
    numPages: 18,
    onSelect: function() {
      console.log('Clicked to download \"Statement 1 from Linda THOMAS.pdf\"');
    },
    isSmallIcon: true
  };

  titleExample = {
    datetime: new Date(2016, 4, 16),
    fileName: 'doc_kd99e473hkh23432.pdf',
    fileSize: 756391,
    numPages: 18,
    title: 'Evidence from Linda, THOMAS',
    onSelect: function() {
      console.log('Clicked to download \"doc_kd99e473hkh23432.pdf\"');
    }
  };
}
