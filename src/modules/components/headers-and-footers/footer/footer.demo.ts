import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./footer.demo.html')
})
export class FooterDemo {
  myLinks = [
    {name: 'Help', url: '#', target: '_self'},
    {name: 'Cookies', url: '#', target: '_blank'},
    {name: 'Contact', url: '#', target: '_self'}
  ];

  builtBy: any = {name: 'Common Platform', url: '#'};
  isBusiness = false;
  minimalView = true;
}
