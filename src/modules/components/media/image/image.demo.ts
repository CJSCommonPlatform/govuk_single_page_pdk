import {Component} from '@govuk/angularjs-devtools';

@Component({
  template: require('./image.demo.html')
})
export class ImageDemoComponent {
  image = {
    src: 'assets/images/justice.jpg',
    title: 'Test image title',
    metadata: [
      {
        key: 'date taken',
        value: '2016 05 19'
      },
      {
        key: 'copyright',
        value: 'none'
      }
    ]
  };
}