import { Component } from '@govuk/angularjs-devtools';

require('./image.scss');

@Component({
    template: require('./image.demo.html')
})

export class ImageDemoComponent {
    image = {
        src: 'images/justice.jpg',
        title: 'Test image heading',
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