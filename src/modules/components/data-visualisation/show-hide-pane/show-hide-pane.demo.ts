import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./show-hide-pane.demo.html')
})
export class ShowHidePaneDemo {
  private open: boolean = false;
  private show: string = 'Open';
  private hide: string = 'Close';
}