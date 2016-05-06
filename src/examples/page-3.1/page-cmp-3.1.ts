import {Component} from '@govuk/angularjs-framework';
import {ServiceThreeOne} from '../services/service-3.1';

require('./page-cmp-3.1.scss');

@Component({
  template: require('./page-cmp-3.1.html')
})

export class PageComponentThreeOne {

  loading: boolean;
  values: string[];
  text: string;

  static $inject = ['ServiceThreeOne'];

  constructor(private _service: ServiceThreeOne) {}

  // $onInit automatically invoked by angular when component bindings are
  // available to the controller
  $onInit() {
    this.loading = true;
    this._service.doSomething()
      .then(values => this.values = values)
      .finally(() => this.loading = false);
  }
}