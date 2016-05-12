import { Component } from '@govuk/angularjs-framework';

require('./persist-info.scss');

@Component({
  template: require('./persist-info.demo.html')
})
export class PersistInfoDemo {

  title = 'Peter JAMES';
  label = '352345URN';
}