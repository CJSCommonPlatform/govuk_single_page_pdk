import { Component } from '@govuk/angularjs-devtools';

@Component({
    template: require('./tab.demo.html')
})
export class TabDemo {
    test(): void {
        console.log('Test!!!');
    }
}