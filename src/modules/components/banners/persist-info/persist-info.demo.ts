import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./persist-info.demo.html')
})
export class PersistInfoDemo {
  private label = '55DP0028116';
  private title = `E. COWAN, E. MICHAELS AND W. PICKUP`;
  private links = [
    {
      title: 'Case Options',
      onClick: () => {
        console.log('Case options');
      }
    },
    {
      title: 'Notifications',
      onClick: () => {
        console.log('Notifications');
      }
    }
  ];
}