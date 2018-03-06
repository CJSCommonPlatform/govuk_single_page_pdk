import { Component } from '@cppui/angularjs-devtools';

@Component({
  template: require('./persist-info.demo.html')
})
export class PersistInfoDemo {
  private demo1 = {
    label: '55DP0028116',
    title: 'E. COWAN, E. MICHAELS AND W. PICKUP',
    links: [
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
    ]
  };

  private demo2 = {
    label: '55DP0028116',
    title: 'E. COWAN, E. MICHAELS AND W. PICKUP',
    warning: 'Sensitive',
    links: [
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
    ]
  };
}
