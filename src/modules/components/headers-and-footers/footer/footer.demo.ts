import { Component } from '../../../../util/angular-utils';

@Component({
  template: require('./footer.demo.html')
})
export class FooterDemo {
  myLinks = [
    {name: 'Help', url: '#'},
    {name: 'Cookies', url: '#', target: '_blank'},
    {name: 'Contact', url: '#'}
  ];

  builtBy: any = {name: 'Common Platform', url: '#'};
  isBusiness = false;
  minimalView = true;
}
