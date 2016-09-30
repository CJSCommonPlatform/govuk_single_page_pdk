import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./notification.demo.html')
})
export class NotificationDemo {
  private examples: Array<any> = [
    {showIcon: true, style: 'success'},
    {showIcon: false, style: 'invalid'}
  ];

  private link = {
    url: 'https://direct.gov.uk',
    title: 'Check Gov.uk'
  }
}