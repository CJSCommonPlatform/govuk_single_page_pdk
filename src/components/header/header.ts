import {Component} from '@govuk/angularjs-framework';

@Component({
  template: require('./header.html')
})

export class Header {
   
  static $inject = ['$state'];

  constructor(private _$state: angular.ui.IStateService) {}

  includes(path: string): boolean {
    return this._$state.includes(path);
  }
}