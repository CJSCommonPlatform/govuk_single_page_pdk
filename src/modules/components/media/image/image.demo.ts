import {Component} from '../../../../util/angular-utils';

@Component({
  template: require('./image.demo.html')
})
export class ImageDemoComponent {
  imageWithoutTitle = {
    src: '//placehold.it/550x366/DEE0E2/6F777B',
    downloadLink: {
      text: 'Download to your computer',
      onClick: function() {
        console.log('Click on \"Download to your computer\" link');
      }
    },
    metadata: [
      {
        value: 'JPG 256KB'
      }
    ]
  };

  imageWithTitle = {
    src: '//placehold.it/550x366/DEE0E2/6F777B',
    title: 'Test image title',
    downloadLink: {
      text: 'Download to your computer',
      onClick: function() {
        console.log('Click on \"Download to your computer\" link');
      }
    },
    metadata: [
      {
        value: 'JPG 256KB'
      }
    ]
  };

  imageWithoutDownloadLink = {
    src: '//placehold.it/550x366/DEE0E2/6F777B',
    metadata: [
      {
        value: 'JPG 256KB'
      }
    ]
  };

  onImageLoad = () => console.log('Image loaded');
}
