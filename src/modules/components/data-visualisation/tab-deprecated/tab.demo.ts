import { Component } from '../../../../util/angular-utils';

@Component({
    template: require('./tab.demo.html')
})
export class TabDemo {
    test(): void {
        console.log('Test!!!');
    }
}
