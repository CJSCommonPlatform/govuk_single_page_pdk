import { Component } from '@govuk/angularjs-devtools';

@Component({
    bindings: {
        image: '<'
    },
    template: require('./image.component.html')
})
export class ImageComponent {}